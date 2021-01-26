// npx hardhat run scripts/router.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { BigNumber, ContractTransaction, PayableOverrides } from "ethers";
import { network, ethers, upgrades } from "hardhat";
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

    const signer = ethers.provider.getSigner();
    // const weth: string = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const weth: string = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
    const wethContract = new ethers.Contract(weth, ierc20ABI, signer) as IERC20;

    // const psi: string = "0xD4Cb461eACe80708078450e465881599d2235f1A";
    const psi: string = "0x92FcE27e6b5F86237D2B1974266D27C2788fa237";
    const psiContract = new ethers.Contract(psi, ierc20ABI, signer) as IERC20;

    // const governance = new ethers.Contract("0x12d181455C792C6a26a78823dB55c1aDDD3AC910", DPexGovernanceAbi, signer) as DPexGovernance;
    const DPexGovernance = await ethers.getContractFactory("DPexGovernance");
    const governance: DPexGovernance = await upgrades.deployProxy(DPexGovernance, [], { initializer: 'initialize' }) as DPexGovernance;
    await governance.deployed();
    console.log("DPexGovernance deployed to:", governance.address);

    // const aggregator = new ethers.Contract("0x4E4B68c4161C1bE77133c2b94b10625679292E6f", DPexFeeAggregatorAbi, signer) as DPexFeeAggregator;
    const DPexFeeAggregator = await ethers.getContractFactory("DPexFeeAggregator");
    const aggregator: DPexFeeAggregator = await upgrades.deployProxy(DPexFeeAggregator, [governance.address, weth, psi], { initializer: 'initialize', unsafeAllowCustomTypes: true }) as DPexFeeAggregator;
    await aggregator.deployed();
    console.log("DPexFeeAggregator deployed to:", aggregator.address);

    // const factory = new ethers.Contract("0x1DeAFD0E3fa0C4088E3873494DBfC98CB76182B6", DPexFactoryAbi, signer) as DPexFactory;
    const DPexFactory = await ethers.getContractFactory("DPexFactory");
    const factory: DPexFactory = await upgrades.deployProxy(DPexFactory, ["0x2C9C756A7CFd79FEBD2fa9b4C82c10a5dB9D8996", governance.address], { initializer: 'initialize' }) as DPexFactory;
    await factory.deployed();
    console.log("DPexFactory deployed to:", factory.address);

    // const router = new ethers.Contract("0x0fb8b7c81257897309a600d17032c1b18cc5df72", DPexRouterAbi, signer) as DPexRouter;
    const DPexRouter = await ethers.getContractFactory("DPexRouter");
    const router: DPexRouter = await DPexRouter.deploy() as DPexRouter;
    // const router: DPexRouter = await upgrades.deployProxy(DPexRouter, [factory.address, weth, governance.address, aggregator.address], { initializer: 'initialize' }) as DPexRouter;
    await router.deployed();
    await router.initialize(factory.address, weth, governance.address, aggregator.address);
    await aggregator.setRouter(router.address);
    console.log("DPexRouter deployed to:", router.address);
    await aggregator.addFeeToken(weth);
    await aggregator.addFeeToken(psi);

    // const chi = new ethers.Contract("0x447287b508b58513de6cd20d9d787cf7e411b5ae", ierc20ABI, signer) as IERC20;
    // await ContractUtils.checkAllowance(factory.address, signer, chi);
    // await ContractUtils.checkAllowance(router.address, signer, chi);
    // await ContractUtils.checkAllowance(router.address, signer, wethContract);
    // await ContractUtils.checkAllowance(router.address, signer, psiContract);
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
