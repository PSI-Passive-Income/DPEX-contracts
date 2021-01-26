# PDEX

This library is using [Hardhat](https://hardhat.org/getting-started/) and [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) for development, compiling, testing and deploying. The development tool used foor development is [Visual Studio Code](https://code.visualstudio.com/) which has [great plugins](https://hardhat.org/guides/vscode-tests.html) for solidity development and mocha testing.

## Contracts

* Kovan
  * PSI : [0x92FcE27e6b5F86237D2B1974266D27C2788fa237](https://kovan.etherscan.io/address/0x92FcE27e6b5F86237D2B1974266D27C2788fa237)
  * WETH : [0xd0A1E359811322d97991E03f863a0C30C2cF029C](https://kovan.etherscan.io/address/0xd0A1E359811322d97991E03f863a0C30C2cF029C)
  * governance: [0x44d8e1101bD752DdacCF0dE6133297E0Cf21f270](https://kovan.etherscan.io/address/0x44d8e1101bD752DdacCF0dE6133297E0Cf21f270)
  * aggregator: [0xD4Cb461eACe80708078450e465881599d2235f1A](https://kovan.etherscan.io/address/0xD4Cb461eACe80708078450e465881599d2235f1A)
  * factory: [0x5B77b700CeDc6Bf8Ff49Ba1ab09978D5c6177886](https://kovan.etherscan.io/address/0x5B77b700CeDc6Bf8Ff49Ba1ab09978D5c6177886)
  * router : [0xb383D76976755f2ce66f0031fBFAE9f6786ab1c6](https://kovan.etherscan.io/address/0xb383D76976755f2ce66f0031fBFAE9f6786ab1c6)

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
