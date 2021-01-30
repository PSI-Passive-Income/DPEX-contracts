import { HardhatUserConfig } from "hardhat/types";

import "@nomiclabs/hardhat-waffle";
import "hardhat-typechain";
import 'hardhat-abi-exporter';
import '@openzeppelin/hardhat-upgrades';
import "@nomiclabs/hardhat-etherscan";

require("dotenv").config({path: `${__dirname}/.env`});

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        enabled: true,
        url: `${process.env.MAIN_ALCHEMY_URL}`,
        blockNumber: 11754056
      }
    },
    kovan: {
      url: `${process.env.KOVAN_INFURA}`,
      accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`]
    },
    goerli: {
      url: `${process.env.GOERLI_INFURA}`,
      accounts: [`0x${process.env.GOERLI_PRIVATE_KEY}`]
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
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: `${process.env.ETHERSCAN_API_TOKEN}`
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