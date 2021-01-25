const path = require("path");
const accountIndex = 0;
require("dotenv").config({path: `${__dirname}/.env`});
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    test: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*"
    },
    rinkeby: {
      network_id: "4",
      provider: function () {
        return new HDWalletProvider(process.env.RINKEBY_MNEMONIC, process.env.RINKEBY_INFURA, accountIndex);
      },
      gasPrice: 150000000000
    },
    goerli: {
      network_id: "5",
      provider: function () {
        return new HDWalletProvider(process.env.GOERLI_MNEMONIC, process.env.GOERLI_INFURA, accountIndex);
      },
      gasLimit: 100000000,
      gasPrice: 50000000000
    },
    main: {
      network_id: "1",
      provider: function () {
        return new HDWalletProvider(process.env.MAIN_MNEMONIC, process.env.MAIN_INFURA, accountIndex);
      },
      gasPrice: 150000000000
    }
  },
  compilers: {
    solc: {
      version: "0.7.4",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 9999999     // Default: 200
        },
        evmVersion: "istanbul"  // Default: "byzantium"
      }
    }
  },
};