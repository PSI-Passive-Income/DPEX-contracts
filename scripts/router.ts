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
import ContractUtils from "./library/ContractUtils";
import { bytecode } from '../artifacts/contracts/DPexFactory.sol/DPexFactory.json'
import { CalHash } from '../typechain/CalHash';
import { keccak256 } from '@ethersproject/solidity'

const main = async() => {
    await network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [process.env.IMPERSONATE_WALLET]
    });

    const signer = ethers.provider.getSigner(process.env.IMPERSONATE_WALLET);
    const weth: string = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";
    const wethContract = new ethers.Contract(weth, ierc20ABI, signer) as IERC20;

    const psi: string = "0xD4Cb461eACe80708078450e465881599d2235f1A";
    const psiContract = new ethers.Contract(psi, ierc20ABI, signer) as IERC20;

    const CalHash = await ethers.getContractFactory("CalHash");
    const calHash: CalHash = await CalHash.deploy() as CalHash;
    await calHash.deployed();
    console.log(await calHash.getInitHash());

    const DPexGovernance = await ethers.getContractFactory("DPexGovernance");
    const governance: DPexGovernance = await upgrades.deployProxy(DPexGovernance, [], { initializer: 'initialize' }) as DPexGovernance;
    await governance.deployed();
    console.log("DPexGovernance deployed to:", governance.address);

    const DPexFeeAggregator = await ethers.getContractFactory("DPexFeeAggregator");
    const aggregator: DPexFeeAggregator = await upgrades.deployProxy(DPexFeeAggregator, [governance.address, weth, psi], { initializer: 'initialize', unsafeAllowCustomTypes: true }) as DPexFeeAggregator;
    await aggregator.deployed();
    console.log("DPexFeeAggregator deployed to:", aggregator.address);

    const DPexFactory = await ethers.getContractFactory("DPexFactory");
    const factory: DPexFactory = await upgrades.deployProxy(DPexFactory, [signer._address, governance.address], { initializer: 'initialize' }) as DPexFactory;
    await factory.deployed();
    console.log("DPexFactory deployed to:", factory.address);

    const DPexRouter = await ethers.getContractFactory("DPexRouter");
    const router: DPexRouter = await DPexRouter.deploy() as DPexRouter;
    // const router: DPexRouter = await upgrades.deployProxy(DPexRouter, [factory.address, weth, governance.address, aggregator.address], { initializer: 'initialize' }) as DPexRouter;
    await router.deployed();
    await router.initialize(factory.address, weth, governance.address, aggregator.address);
    await governance.setRouter(router.address);
    await aggregator.addFeeToken(weth);
    await aggregator.addFeeToken(psi);
    console.log("DPexRouter deployed to:", router.address);

    console.log("Total pairs before:", (await factory.allPairsLength()).toNumber());
    await ContractUtils.waitForTransaction(factory.createPair(psi, weth));
    console.log("Total pairs after:", (await factory.allPairsLength()).toNumber());

    const pair: string = await factory.getPair(psi, weth);
    console.log("Pair address:", pair);
    await ContractUtils.checkAllowance(router.address, signer, wethContract);
    await ContractUtils.checkAllowance(router.address, signer, psiContract);

    const amountA = ethers.utils.parseUnits("1", 9);
    const amountB = ethers.utils.parseEther("0.05");
    const minAmountA = ContractUtils.percentage(amountA, 75);
    const minAmountB = ContractUtils.percentage(amountB, 75);
    const options: PayableOverrides = { value: amountB };
    const transaction: ContractTransaction = await router.connect(signer)
      .addLiquidityETH(psiContract.address, amountA, minAmountA, minAmountB, signer._address, (new Date).getTime() + 2*60000, options);
    const receipt = await ethers.provider.waitForTransaction(transaction.hash);
    console.log("Added liquidity to dpex, gas used:", ethers.utils.formatUnits(receipt.gasUsed, "gwei"));

    const chi = new ethers.Contract("0x0000000000004946c0e9F43F4Dee607b0eF1fA1c", ierc20ABI, signer) as IERC20;
    // await ContractUtils.checkAllowance(factory.address, signer, chi);
    // await ContractUtils.checkAllowance(router.address, signer, chi);
    await ContractUtils.waitForTransaction(chi.connect(signer).transfer(router.address, 20));
    await ContractUtils.waitForTransaction(governance.setEnableGasPromotion(true));

    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
    const swapAmount = ethers.utils.parseUnits("0.01", 9);
    const swapAmountMin = ethers.utils.parseEther("0.0001");
    const path = [psi, weth];
    const swaptransaction: ContractTransaction = await router.connect(signer)
      .swapExactTokensForETHSupportingFeeOnTransferTokens(swapAmount, swapAmountMin, path, signer._address, (new Date).getTime() + 2*60000);
    const swapreceipt = await ethers.provider.waitForTransaction(swaptransaction.hash);
    console.log("Swapped psi to eth, gas used:", ethers.utils.formatUnits(swapreceipt.gasUsed, "gwei"));
    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));

    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
    const swapAmount3 = ethers.utils.parseUnits("0.01", 9);
    const swapAmountMin3 = ethers.utils.parseEther("0.0001");
    const path3 = [psi, weth];
    const swaptransaction3: ContractTransaction = await router.connect(signer)
      .swapExactTokensForETHSupportingFeeOnTransferTokens(swapAmount3, swapAmountMin3, path3, signer._address, (new Date).getTime() + 2*60000);
    const swapreceipt3 = await ethers.provider.waitForTransaction(swaptransaction3.hash);
    console.log("Swapped psi to eth, gas used:", ethers.utils.formatUnits(swapreceipt3.gasUsed, "gwei"));
    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));

    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
    const swapAmount2 = ethers.utils.parseEther("0.0001");
    const swapAmount2Min = ethers.utils.parseUnits("0.0001", 9);
    const path2 = [weth, psi];
    const options2: PayableOverrides = { value: swapAmount2 };
    const swaptransaction2: ContractTransaction = await router.connect(signer)
      .swapExactETHForTokensSupportingFeeOnTransferTokens(swapAmount2Min, path2, signer._address, (new Date).getTime() + 2*60000, options2);
    const swapreceipt2 = await ethers.provider.waitForTransaction(swaptransaction2.hash);
    console.log("Swapped eth to psi, gas used:", ethers.utils.formatUnits(swapreceipt2.gasUsed, "gwei"));
    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));

    console.log("PSI fees gathered: ", ethers.utils.formatUnits(await aggregator.tokensGathered(psi), 9));
    console.log("WETH fees gathered: ", ethers.utils.formatEther(await aggregator.tokensGathered(weth)));
    console.log("PSI aggregator balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(aggregator.address), 9));
    console.log("WETH aggregator balance: ", ethers.utils.formatEther(await wethContract.balanceOf(aggregator.address)));

    await ContractUtils.waitForTransaction(aggregator.addTokenHolder(signer._address));
    await ContractUtils.waitForTransaction(aggregator.takeSnapshotWithRewards((new Date).getTime() + 2*60000));
    console.log("User total rewards: ", ethers.utils.formatUnits(await aggregator.getTotalRewards(signer._address), 9));
    console.log("User unclaimed rewards: ", ethers.utils.formatUnits(await aggregator.getUnclaimedRewards(signer._address), 9));
    console.log("User claimed rewards: ", ethers.utils.formatUnits(await aggregator.getClaimedRewards(signer._address), 9));

    await ContractUtils.waitForTransaction(aggregator.connect(signer).claim());
    console.log("User total rewards: ", ethers.utils.formatUnits(await aggregator.getTotalRewards(signer._address), 9));
    console.log("User unclaimed rewards: ", ethers.utils.formatUnits(await aggregator.getUnclaimedRewards(signer._address), 9));
    console.log("User claimed rewards: ", ethers.utils.formatUnits(await aggregator.getClaimedRewards(signer._address), 9));
    console.log("User psi balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(signer._address), 9));
    console.log("User ETH balance: ", ethers.utils.formatEther(await signer.getBalance()));
    console.log("PSI fees gathered: ", ethers.utils.formatUnits(await aggregator.tokensGathered(psi), 9));
    console.log("WETH fees gathered: ", ethers.utils.formatEther(await aggregator.tokensGathered(weth)));
    console.log("PSI aggregator balance: ", ethers.utils.formatUnits(await psiContract.balanceOf(aggregator.address), 9));
    console.log("WETH aggregator balance: ", ethers.utils.formatEther(await wethContract.balanceOf(aggregator.address)));
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
