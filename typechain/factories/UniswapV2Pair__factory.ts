/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapV2Pair } from "../UniswapV2Pair";

export class UniswapV2Pair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<UniswapV2Pair> {
    return super.deploy(overrides || {}) as Promise<UniswapV2Pair>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UniswapV2Pair {
    return super.attach(address) as UniswapV2Pair;
  }
  connect(signer: Signer): UniswapV2Pair__factory {
    return super.connect(signer) as UniswapV2Pair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapV2Pair {
    return new Contract(address, _abi, signerOrProvider) as UniswapV2Pair;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1In",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve0",
        type: "uint112",
      },
      {
        indexed: false,
        internalType: "uint112",
        name: "reserve1",
        type: "uint112",
      },
    ],
    name: "Sync",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINIMUM_LIQUIDITY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "amount0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getReserves",
    outputs: [
      {
        internalType: "uint112",
        name: "_reserve0",
        type: "uint112",
      },
      {
        internalType: "uint112",
        name: "_reserve1",
        type: "uint112",
      },
      {
        internalType: "uint32",
        name: "_blockTimestampLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token1",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "price0CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1CumulativeLast",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount0Out",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount1Out",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "sync",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "token0",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "token1",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526001600c5534801561001557600080fd5b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6040518060600160405280602381526020016128ad60239139805160209182012060408051808201825260018152603160f81b90840152805180840194909452838101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606084015260808301939093523060a0808401919091528351808403909101815260c09092019092528051910120600355600580546001600160a01b031916331790556127b7806100f66000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610544578063d505accf1461054c578063dd62ed3e1461059d578063fff6cae9146105cb576101b9565b8063ba9a7a561461050e578063bc25cf7714610516578063c45a01551461053c576101b9565b80637ecebe00116100d35780637ecebe001461047557806389afcb441461049b57806395d89b41146104da578063a9059cbb146104e2576101b9565b80636a6278421461042157806370a08231146104475780637464fc3d1461046d576101b9565b806323b872dd116101665780633644e515116101405780633644e515146103db578063485cc955146103e35780635909c0d5146104115780635a3d549314610419576101b9565b806323b872dd1461037f57806330adf81f146103b5578063313ce567146103bd576101b9565b8063095ea7b311610197578063095ea7b3146103015780630dfe16811461034157806318160ddd14610365576101b9565b8063022c0d9f146101be57806306fdde031461024c5780630902f1ac146102c9575b600080fd5b61024a600480360360808110156101d457600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561020b57600080fd5b82018360208201111561021d57600080fd5b8035906020019184600183028401116401000000008311171561023f57600080fd5b5090925090506105d3565b005b6102546107fd565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028e578181015183820152602001610276565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d1610819565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61032d6004803603604081101561031757600080fd5b506001600160a01b038135169060200135610843565b604080519115158252519081900360200190f35b61034961085a565b604080516001600160a01b039092168252519081900360200190f35b61036d610869565b60408051918252519081900360200190f35b61032d6004803603606081101561039557600080fd5b506001600160a01b0381358116916020810135909116906040013561086f565b61036d610903565b6103c5610927565b6040805160ff9092168252519081900360200190f35b61036d61092c565b61024a600480360360408110156103f957600080fd5b506001600160a01b0381358116916020013516610932565b61036d610a86565b61036d610a8c565b61036d6004803603602081101561043757600080fd5b50356001600160a01b0316610a92565b61036d6004803603602081101561045d57600080fd5b50356001600160a01b0316610e1f565b61036d610e31565b61036d6004803603602081101561048b57600080fd5b50356001600160a01b0316610e37565b6104c1600480360360208110156104b157600080fd5b50356001600160a01b0316610e49565b6040805192835260208301919091528051918290030190f35b610254611296565b61032d600480360360408110156104f857600080fd5b506001600160a01b0381351690602001356112cf565b61036d6112dc565b61024a6004803603602081101561052c57600080fd5b50356001600160a01b03166112e2565b6103496114fc565b61034961150b565b61024a600480360360e081101561056257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561151a565b61036d600480360360408110156105b357600080fd5b506001600160a01b0381358116916020013516611742565b61024a61175f565b60005a9050600c54600114610623576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55851515806106365750600085115b6106715760405162461bcd60e51b81526004018080602001828103825260258152602001806126846025913960400191505060405180910390fd5b60008061067c610819565b5091509150816001600160701b0316881080156106a15750806001600160701b031687105b6106dc5760405162461bcd60e51b81526004018080602001828103825260218152602001806126cd6021913960400191505060405180910390fd5b6000806106ee84848c8c8c8c8c611969565b60408051838152602081018390528082018e9052606081018d905290519294509092506001600160a01b038a169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822919081900360800190a350506001600c55506d4946c0e9f43f4dee607b0ef1fa1c905063079d229f3361a3db601036025a8661520801030161374a018161078257fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156107c957600080fd5b505af11580156107dd573d6000803e3d6000fd5b505050506040513d60208110156107f357600080fd5b5050505050505050565b60405180606001604052806023815260200161275f6023913981565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610850338484611a46565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146108ee576001600160a01b03841660009081526002602090815260408083203384529091529020546108c99083611aa8565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b6108f9848484611af1565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60005a6005549091506001600160a01b03163314610997576040805162461bcd60e51b815260206004820152601460248201527f556e697377617056323a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b600680546001600160a01b038086167fffffffffffffffffffffffff00000000000000000000000000000000000000009283161790925560078054928516929091169190911790556d4946c0e9f43f4dee607b0ef1fa1c63079d229f3361a3db601036025a8661520801030161374a0181610a0e57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610a5557600080fd5b505af1158015610a69573d6000803e3d6000fd5b505050506040513d6020811015610a7f57600080fd5b5050505050565b60095481565b600a5481565b6000805a9050600c54600114610ae3576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610af3610819565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610b4757600080fd5b505afa158015610b5b573d6000803e3d6000fd5b505050506040513d6020811015610b7157600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610bc457600080fd5b505afa158015610bd8573d6000803e3d6000fd5b505050506040513d6020811015610bee57600080fd5b505190506000610c07836001600160701b038716611aa8565b90506000610c1e836001600160701b038716611aa8565b90506000610c2c8787611b9f565b60005490915080610c6957610c556103e8610c4f610c4a8787611cdf565b611d38565b90611aa8565b9950610c6460006103e8611d8a565b610cac565b610ca96001600160701b038916610c808684611cdf565b81610c8757fe5b046001600160701b038916610c9c8685611cdf565b81610ca357fe5b04611e14565b99505b60008a11610ceb5760405162461bcd60e51b81526004018080602001828103825260288152602001806127166028913960400191505060405180910390fd5b610cf58b8b611d8a565b610d0186868a8a611e2a565b8115610d2b57600854610d27906001600160701b0380821691600160701b900416611cdf565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c55506d4946c0e9f43f4dee607b0ef1fa1c945063079d229f935033925061a3db915050601036025a8661520801030161374a0181610da557fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610dec57600080fd5b505af1158015610e00573d6000803e3d6000fd5b505050506040513d6020811015610e1657600080fd5b50919392505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b60008060005a9050600c54600114610e9c576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610eac610819565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b158015610f0857600080fd5b505afa158015610f1c573d6000803e3d6000fd5b505050506040513d6020811015610f3257600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b158015610f8057600080fd5b505afa158015610f94573d6000803e3d6000fd5b505050506040513d6020811015610faa57600080fd5b505130600090815260016020526040812054919250610fc98888611b9f565b60005490915080610fda8487611cdf565b81610fe157fe5b049b5080610fef8486611cdf565b81610ff657fe5b049a5060008c118015611009575060008b115b6110445760405162461bcd60e51b81526004018080602001828103825260288152602001806126ee6028913960400191505060405180910390fd5b61104e3084612012565b611059878e8e6120a4565b611064868e8d6120a4565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b1580156110aa57600080fd5b505afa1580156110be573d6000803e3d6000fd5b505050506040513d60208110156110d457600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b15801561112057600080fd5b505afa158015611134573d6000803e3d6000fd5b505050506040513d602081101561114a57600080fd5b5051935061115a85858b8b611e2a565b811561118457600854611180906001600160701b0380821691600160701b900416611cdf565b600b555b8c6001600160a01b0316336001600160a01b03167fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d819364968e8e604051808381526020018281526020019250505060405180910390a350506001600c55506d4946c0e9f43f4dee607b0ef1fa1c955063079d229f945033935061a3db9250506010360290505a8661520801030161374a018161121957fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561126057600080fd5b505af1158015611274573d6000803e3d6000fd5b505050506040513d602081101561128a57600080fd5b50929491935090915050565b6040518060400160405280600481526020017f445045580000000000000000000000000000000000000000000000000000000081525081565b6000610850338484611af1565b6103e881565b60005a9050600c54600114611332576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926113db92859288926113d6926001600160701b03169185916370a0823191602480820192602092909190829003018186803b1580156113a457600080fd5b505afa1580156113b8573d6000803e3d6000fd5b505050506040513d60208110156113ce57600080fd5b505190611aa8565b6120a4565b61144f81856113d66008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156113a457600080fd5b50506001600c556d4946c0e9f43f4dee607b0ef1fa1c63079d229f3361a3db601036025a8661520801030161374a018161148557fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156114cc57600080fd5b505af11580156114e0573d6000803e3d6000fd5b505050506040513d60208110156114f657600080fd5b50505050565b6005546001600160a01b031681565b6007546001600160a01b031681565b4284101561156f576040805162461bcd60e51b815260206004820152601260248201527f556e697377617056323a20455850495245440000000000000000000000000000604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116a5573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116db5750886001600160a01b0316816001600160a01b0316145b61172c576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b611737898989611a46565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b60005a9050600c546001146117af576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118bf926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561180057600080fd5b505afa158015611814573d6000803e3d6000fd5b505050506040513d602081101561182a57600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561187757600080fd5b505afa15801561188b573d6000803e3d6000fd5b505050506040513d60208110156118a157600080fd5b50516008546001600160701b0380821691600160701b900416611e2a565b6001600c556d4946c0e9f43f4dee607b0ef1fa1c63079d229f3361a3db601036025a8661520801030161374a01816118f357fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561193a57600080fd5b505af115801561194e573d6000803e3d6000fd5b505050506040513d602081101561196457600080fd5b505050565b60008060008061197c8989898989612250565b91509150888b6001600160701b03160382116119995760006119a8565b888b6001600160701b03160382035b9350878a6001600160701b03160381116119c35760006119d2565b878a6001600160701b03160381035b925060008411806119e35750600083115b611a1e5760405162461bcd60e51b81526004018080602001828103825260248152602001806126a96024913960400191505060405180910390fd5b611a2c828286868f8f6124ab565b611a3882828d8d611e2a565b505097509795505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611aea83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061255b565b9392505050565b6001600160a01b038316600090815260016020526040902054611b149082611aa8565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611b4390826125f2565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611bf057600080fd5b505afa158015611c04573d6000803e3d6000fd5b505050506040513d6020811015611c1a57600080fd5b5051600b546001600160a01b038216158015945091925090611ccb578015611cc6576000611c57610c4a6001600160701b03888116908816611cdf565b90506000611c6483611d38565b905080821115611cc3576000611c86611c7d8484611aa8565b60005490611cdf565b90506000611c9f83611c99866005611cdf565b906125f2565b90506000818381611cac57fe5b0490508015611cbf57611cbf8782611d8a565b5050505b50505b611cd7565b8015611cd7576000600b555b505092915050565b600082611cee57506000610854565b82820282848281611cfb57fe5b0414611aea5760405162461bcd60e51b815260040180806020018281038252602181526020018061273e6021913960400191505060405180910390fd5b60006003821115611d7b575080600160028204015b81811015611d7557809150600281828581611d6457fe5b040181611d6d57fe5b049050611d4d565b50611d85565b8115611d85575060015b919050565b600054611d9790826125f2565b60009081556001600160a01b038316815260016020526040902054611dbc90826125f2565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310611e235781611aea565b5090919050565b6001600160701b038411801590611e4857506001600160701b038311155b611e99576040805162461bcd60e51b815260206004820152601360248201527f556e697377617056323a204f564552464c4f5700000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611ec957506001600160701b03841615155b8015611edd57506001600160701b03831615155b15611f48578063ffffffff16611f0585611ef68661264c565b6001600160e01b03169061265e565b600980546001600160e01b03929092169290920201905563ffffffff8116611f3084611ef68761264c565b600a80546001600160e01b0392909216929092020190555b600880547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b0382166000908152600160205260409020546120359082611aa8565b6001600160a01b0383166000908152600160205260408120919091555461205c9082611aa8565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b03167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b6020831061216a5780518252601f19909201916020918201910161214b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146121cc576040519150601f19603f3d011682016040523d82523d6000602084013e6121d1565b606091505b50915091508180156121ff5750805115806121ff57508080602001905160208110156121fc57600080fd5b50515b610a7f576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b60065460075460009182916001600160a01b0391821691908116908716821480159061228e5750806001600160a01b0316876001600160a01b031614155b6122df576040805162461bcd60e51b815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f0000000000000000000000604482015290519081900360640190fd5b88156122f0576122f082888b6120a4565b87156123015761230181888a6120a4565b84156123b357866001600160a01b03166310d1e85c338b8b8a8a6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561239a57600080fd5b505af11580156123ae573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b1580156123f957600080fd5b505afa15801561240d573d6000803e3d6000fd5b505050506040513d602081101561242357600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b15801561246f57600080fd5b505afa158015612483573d6000803e3d6000fd5b505050506040513d602081101561249957600080fd5b50519399939850929650505050505050565b60006124c76124bb866003611cdf565b610c4f896103e8611cdf565b905060006124d96124bb866003611cdf565b90506124fe620f42406124f86001600160701b03878116908716611cdf565b90611cdf565b6125088383611cdf565b10156107f3576040805162461bcd60e51b815260206004820152600c60248201527f556e697377617056323a204b0000000000000000000000000000000000000000604482015290519081900360640190fd5b600081848411156125ea5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156125af578181015183820152602001612597565b50505050905090810190601f1680156125dc5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611aea576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161267b57fe5b04939250505056fe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77446563656e7472616c697a656420506173736976652045786368616e67652050616972a26469706673582212208221feb08ff8695786c9a38829b281df83efdbe67d1cab3dc5fb016ef692f06164736f6c63430007040033446563656e7472616c697a656420506173736976652045786368616e67652050616972";