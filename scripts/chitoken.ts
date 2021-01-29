// npx hardhat run scripts/router.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { BigNumber, ContractTransaction, PayableOverrides } from "ethers";
import { network, ethers, upgrades } from "hardhat";
import upgradesAbi from "../abi/upgrades.json";
import { DPexFactory } from "../typechain/DPexFactory";
import DPexFactoryAbi from "../abi/contracts/DPexFactory.sol/DPexFactory.json";
import { IERC20 } from "../typechain/IERC20";
import ierc20ABI from "../abi/@openzeppelin/contracts/token/ERC20/IERC20.sol/IERC20.json";
import { DPexGovernance } from '../typechain/DPexGovernance';
import DPexGovernanceAbi from "../abi/contracts/DPexGovernance.sol/DPexGovernance.json";
import { DPexFeeAggregator } from '../typechain/DPexFeeAggregator';
import DPexFeeAggregatorAbi from "../abi/contracts/DPexFeeAggregator.sol/DPexFeeAggregator.json";
import { DPexRouter } from '../typechain/DPexRouter';
import DPexRouterAbi from "../abi/contracts/DPexRouter.sol/DPexRouter.json";
import { DPexPair } from '../typechain/DPexPair';
import DPexPairAbi from "../abi/contracts/DPexPair.sol/DPexPair.json";
import { IUniswapV2Router02 } from '../typechain/IUniswapV2Router02';
import IUniswapV2Router02ABI from "../abi/contracts/interfaces/IUniswapV2Router02.sol/IUniswapV2Router02.json";
import ContractUtils from "./library/ContractUtils";
import { bytecode } from '../artifacts/contracts/DPexFactory.sol/DPexFactory.json'
import { CalHash } from '../typechain/CalHash';
import { keccak256 } from '@ethersproject/solidity'

const main = async() => {
    const signer = ethers.provider.getSigner(process.env.IMPERSONATE_WALLET);

    const weth: string = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
    const wethContract = new ethers.Contract(weth, ierc20ABI, signer) as IERC20;

    const psi: string = "0x92FcE27e6b5F86237D2B1974266D27C2788fa237";
    const psiContract = new ethers.Contract(psi, ierc20ABI, signer) as IERC20;

    const governance = new ethers.Contract("0x44d8e1101bD752DdacCF0dE6133297E0Cf21f270", DPexGovernanceAbi, signer) as DPexGovernance;
    const aggregator = new ethers.Contract("0xD4Cb461eACe80708078450e465881599d2235f1A", DPexFeeAggregatorAbi, signer) as DPexFeeAggregator;
    const factory = new ethers.Contract("0x5B77b700CeDc6Bf8Ff49Ba1ab09978D5c6177886", DPexFactoryAbi, signer) as DPexFactory;
    const router = new ethers.Contract("0xb383D76976755f2ce66f0031fBFAE9f6786ab1c6", DPexRouterAbi, signer) as DPexRouter;

    const chi = new ethers.Contract("0x447287b508b58513de6cd20d9d787cf7e411b5ae", ierc20ABI, signer) as IERC20;
    await ContractUtils.checkAllowance(factory.address, signer, chi);
    await ContractUtils.checkAllowance(router.address, signer, chi);
    await ContractUtils.checkAllowance(router.address, signer, wethContract);
    await ContractUtils.checkAllowance(router.address, signer, psiContract);

    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
    const swapAmount = ethers.utils.parseUnits("1", 9);
    const swapAmountMin = ethers.utils.parseEther("0.00001");
    const path = [psi, weth];
    const swaptransaction: ContractTransaction = await router.connect(signer)
      .swapExactTokensForETHSupportingFeeOnTransferTokens(swapAmount, swapAmountMin, path, signer._address, (new Date).getTime() + 2*60000);
    const swapreceipt = await ethers.provider.waitForTransaction(swaptransaction.hash);
    console.log("Swapped psi to eth, gas used:", ethers.utils.formatUnits(swapreceipt.gasUsed, "gwei"));
    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });