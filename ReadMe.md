# Installing and compiling

This library is using [Hardhat](https://hardhat.org/getting-started/) and [Truffle](https://www.trufflesuite.com/docs/truffle/getting-started/running-migrations) for development, compiling, testing and deploying. The development tool used foor development is [Visual Studio Code](https://code.visualstudio.com/) which has [great plugins](https://hardhat.org/guides/vscode-tests.html) for solidity development and mocha testing.

#### Install needed packages

```npm
npm install or yarn install
```

#### Compile code

```npm
npx hardhat compile
```

#### Test code

```node
npx hardhat test
```

#### Run a local development node

This is needed before a truffle migrate to the development network. You can also use this for local development with for example metamask. [Hardhat node guide](https://hardhat.org/hardhat-network/)

```node
npx hardhat node
```

#### Migrate to the correct networks

```node
truffle migrate --network development
truffle migrate --network test
truffle migrate --network rinkeby
truffle migrate --network goerli
truffle migrate --network main
```

Make sure you have set the right settings in your ['.env' file](https://www.npmjs.com/package/dotenv). You have to create this file with the following contents yourself:

```node
RINKEBY_MNEMONIC=keyhere
GOERLI_MNEMONIC=keyhere
MAIN_MNEMONIC=keyhere
RINKEBY_INFURA=https://rinkeby.infura.io/v3/<infurakey>
GOERLI_INFURA=https://goerli.infura.io/v3/<infurakey>
MAIN_INFURA=https://mainnet.infura.io/v3/<infurakey>

ALCHEMY_KEY=keyhere
ETHERSCAN_API_TOKEN=keyhere;
```

#### Flatten contracts

```node
npx hardhat flatten contracts/DPexRouter.sol > contracts-flattened/DPexRouter.sol
```
