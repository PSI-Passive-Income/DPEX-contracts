# PDEX

This library is using [Hardhat](https://hardhat.org/getting-started/) and [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) for development, compiling, testing and deploying. The development tool used foor development is [Visual Studio Code](https://code.visualstudio.com/) which has [great plugins](https://hardhat.org/guides/vscode-tests.html) for solidity development and mocha testing.

## Contracts

* Kovan
  * PSI : [0x92FcE27e6b5F86237D2B1974266D27C2788fa237](https://kovan.etherscan.io/address/0x92FcE27e6b5F86237D2B1974266D27C2788fa237)
  * WETH : [0xd0A1E359811322d97991E03f863a0C30C2cF029C](https://kovan.etherscan.io/address/0xd0A1E359811322d97991E03f863a0C30C2cF029C)
  * CHI : [0x447287b508b58513de6cd20d9d787cf7e411b5ae](https://kovan.etherscan.io/address/0x447287b508b58513de6cd20d9d787cf7e411b5ae)
  * governance: [0x91F27E37f9bbD3553E3791ebD8f21cF69C101536](https://kovan.etherscan.io/address/0x91F27E37f9bbD3553E3791ebD8f21cF69C101536)
  * aggregator: [0x2Ee4Eaf40CBd5D983bdDF92594281C2E00Fffa52](https://kovan.etherscan.io/address/0x2Ee4Eaf40CBd5D983bdDF92594281C2E00Fffa52)
  * factory: [0x0EAb86c2532C200078358065c461e6C88C03013d](https://kovan.etherscan.io/address/0x0EAb86c2532C200078358065c461e6C88C03013d)
  * router : [0x466ff2466D08aB2a265b131F0d16fB9685ecC666](https://kovan.etherscan.io/address/0x466ff2466D08aB2a265b131F0d16fB9685ecC666)

## Compiling

Introduction to compiling these contracts

### Install needed packages

```npm
npm install or yarn install
```

### Compile code

```npm
npx hardhat compile
```

### Test code

```node
npx hardhat test
```

### Run a local development node

This is needed before a truffle migrate to the development network. You can also use this for local development with for example metamask. [Hardhat node guide](https://hardhat.org/hardhat-network/)

```node
npx hardhat node
```

### Migrate to the correct networks

```node
truffle migrate --network development
truffle migrate --network test
truffle migrate --network rinkeby
truffle migrate --network goerli
truffle migrate --network main
```

Make sure you have set the right settings in your ['.env' file](https://www.npmjs.com/package/dotenv). You have to create this file with the following contents yourself:

```node
KOVAN_PRIVATE_KEY=keyhere
RINKEBY_PRIVATE_KEY=keyhere
GOERLI_PRIVATE_KEY=keyhere
MAIN_PRIVATE_KEY=keyhere
KOVAN_INFURA=https://kovan.infura.io/v3/<infurakey>
RINKEBY_INFURA=https://rinkeby.infura.io/v3/<infurakey>
GOERLI_INFURA=https://goerli.infura.io/v3/<infurakey>
MAIN_INFURA=https://mainnet.infura.io/v3/<infurakey>

ALCHEMY_KEY=keyhere
ETHERSCAN_API_TOKEN=keyhere;
```

### Flatten contracts

```node
npx hardhat flatten contracts/DPexRouter.sol > contracts-flattened/DPexRouter.sol
```
