// npx hardhat run scripts/upgrade.ts

require("dotenv").config({path: `${__dirname}/.env`});
import { BigNumber, ContractTransaction, PayableOverrides } from "ethers";
import { network, ethers, upgrades } from "hardhat";
import { DPexFactory } from "../typechain/DPexFactory";
import { DPexGovernance } from '../typechain/DPexGovernance';
import { DPexFeeAggregator } from '../typechain/DPexFeeAggregator';
import { DPexRouter } from '../typechain/DPexRouter';

const main = async() => {
  const weth: string = "0xd0A1E359811322d97991E03f863a0C30C2cF029C";
  const psi: string = "0x92FcE27e6b5F86237D2B1974266D27C2788fa237";
  const govProxyAddress = '0x44d8e1101bD752DdacCF0dE6133297E0Cf21f270';
  const aggProxyAddress = '0xD4Cb461eACe80708078450e465881599d2235f1A';
  const factProxyAddress = '0x5B77b700CeDc6Bf8Ff49Ba1ab09978D5c6177886';

  // const DPexGovernance = await ethers.getContractFactory("DPexGovernance");
  // const governance: DPexGovernance = await upgrades.upgradeProxy(govProxyAddress, DPexGovernance) as DPexGovernance;
  // console.log(`Governance updated: ${governance.address}`);

  const DPexFeeAggregator = await ethers.getContractFactory("DPexFeeAggregator");
  const aggregator: DPexFeeAggregator = await upgrades.deployProxy(DPexFeeAggregator, [govProxyAddress, weth, psi], { initializer: 'initialize', unsafeAllowCustomTypes: true }) as DPexFeeAggregator;
  await aggregator.deployed();
  await aggregator.addFeeToken(weth);
  await aggregator.addFeeToken(psi);
  console.log("DPexFeeAggregator deployed to:", aggregator.address);

  // const DPexFeeAggregator = await ethers.getContractFactory("DPexFeeAggregator");
  // const aggregator: DPexFeeAggregator = await upgrades.upgradeProxy(aggProxyAddress, DPexFeeAggregator, { unsafeAllowCustomTypes: true }) as DPexFeeAggregator;
  // console.log("DPexFeeAggregator updated:", aggregator.address);

  const DPexFactory = await ethers.getContractFactory("DPexFactory");
  const factory: DPexFactory = await upgrades.upgradeProxy(factProxyAddress, DPexFactory) as DPexFactory;
  console.log("DPexFactory updated:", factory.address);

  const DPexRouter = await ethers.getContractFactory("DPexRouter");
  const router: DPexRouter = await DPexRouter.deploy() as DPexRouter;
  await router.deployed();
  await router.initialize(factProxyAddress, weth, govProxyAddress, aggProxyAddress);
  await aggregator.setRouter(router.address);
  console.log("New DPexRouter set and deployed to:", router.address);
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });