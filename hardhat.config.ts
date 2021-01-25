import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import 'hardhat-abi-exporter';

require("dotenv").config({path: `${__dirname}/.env`});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.ALCHEMY_KEY}`,
        blockNumber: 11719791
      }
    }
    // mainnet: {
    //   url: `${process.env.MAIN_INFURA}`,
    //   accounts: [`0x${process.env.MAIN_PRIVATE_KEY}`]
    // },
    // rinkeby: {
    //   url: `${process.env.RINKEBY_INFURA}`,
    //   accounts: [`0x${process.env.RINKEBY_PRIVATE_KEY}`]
    // }
  },
  solidity: {
    compilers: [{ 
      version: "0.7.4", 
      settings: {
        optimizer: {
          enabled: true,
          runs: 1200
        }
      } 
    }],
  },
};

export default config;