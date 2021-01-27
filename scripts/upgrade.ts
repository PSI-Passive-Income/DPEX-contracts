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
    const signer = ethers.provider.getSigner();

    const proxyAddress = '0x44d8e1101bD752DdacCF0dE6133297E0Cf21f270';
    const DPexGovernance = await ethers.getContractFactory("DPexGovernance");
    const governance = await upgrades.upgradeProxy(proxyAddress, DPexGovernance);
    console.log(`Governance updated: ${governance.address}`);
}

main()
//   .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });