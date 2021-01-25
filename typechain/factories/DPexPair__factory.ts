/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { DPexPair } from "../DPexPair";

export class DPexPair__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<DPexPair> {
    return super.deploy(overrides || {}) as Promise<DPexPair>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DPexPair {
    return super.attach(address) as DPexPair;
  }
  connect(signer: Signer): DPexPair__factory {
    return super.connect(signer) as DPexPair__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DPexPair {
    return new Contract(address, _abi, signerOrProvider) as DPexPair;
  }
}

const _abi = [
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
        name: "_factory",
        type: "address",
      },
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
  "0x60806040526005805460ff191690556001600c5534801561001f57600080fd5b5060004690507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60405180606001604052806023815260200161284460239139805160209182012060408051808201825260018152603160f81b90840152805180840194909452838101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606084015260808301939093523060a0808401919091528351808403909101815260c09092019092528051910120600355612756806100ee6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806370a08231116100f9578063bc25cf7711610097578063d21220a711610071578063d21220a71461054e578063d505accf14610556578063dd62ed3e146105a7578063fff6cae9146105d5576101b9565b8063bc25cf77146104e8578063c0c53b8b1461050e578063c45a015514610546576101b9565b806389afcb44116100d357806389afcb441461046d57806395d89b41146104ac578063a9059cbb146104b4578063ba9a7a56146104e0576101b9565b806370a08231146104195780637464fc3d1461043f5780637ecebe0014610447576101b9565b806323b872dd116101665780633644e515116101405780633644e515146103db5780635909c0d5146103e35780635a3d5493146103eb5780636a627842146103f3576101b9565b806323b872dd1461037f57806330adf81f146103b5578063313ce567146103bd576101b9565b8063095ea7b311610197578063095ea7b3146103015780630dfe16811461034157806318160ddd14610365576101b9565b8063022c0d9f146101be57806306fdde031461024c5780630902f1ac146102c9575b600080fd5b61024a600480360360808110156101d457600080fd5b8135916020810135916001600160a01b03604083013516919081019060808101606082013564010000000081111561020b57600080fd5b82018360208201111561021d57600080fd5b8035906020019184600183028401116401000000008311171561023f57600080fd5b5090925090506105dd565b005b610254610807565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561028e578181015183820152602001610276565b50505050905090810190601f1680156102bb5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102d1610823565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61032d6004803603604081101561031757600080fd5b506001600160a01b03813516906020013561084d565b604080519115158252519081900360200190f35b610349610864565b604080516001600160a01b039092168252519081900360200190f35b61036d610873565b60408051918252519081900360200190f35b61032d6004803603606081101561039557600080fd5b506001600160a01b03813581169160208101359091169060400135610879565b61036d61090d565b6103c5610931565b6040805160ff9092168252519081900360200190f35b61036d610936565b61036d61093c565b61036d610942565b61036d6004803603602081101561040957600080fd5b50356001600160a01b0316610948565b61036d6004803603602081101561042f57600080fd5b50356001600160a01b0316610cd5565b61036d610ce7565b61036d6004803603602081101561045d57600080fd5b50356001600160a01b0316610ced565b6104936004803603602081101561048357600080fd5b50356001600160a01b0316610cff565b6040805192835260208301919091528051918290030190f35b61025461114c565b61032d600480360360408110156104ca57600080fd5b506001600160a01b038135169060200135611185565b61036d611192565b61024a600480360360208110156104fe57600080fd5b50356001600160a01b0316611198565b61024a6004803603606081101561052457600080fd5b506001600160a01b0381358116916020810135821691604090910135166113b2565b61034961148f565b6103496114a3565b61024a600480360360e081101561056c57600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356114b2565b61036d600480360360408110156105bd57600080fd5b506001600160a01b03813581169160200135166116da565b61024a6116f7565b60005a9050600c5460011461062d576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55851515806106405750600085115b61067b5760405162461bcd60e51b81526004018080602001828103825260258152602001806126236025913960400191505060405180910390fd5b600080610686610823565b5091509150816001600160701b0316881080156106ab5750806001600160701b031687105b6106e65760405162461bcd60e51b815260040180806020018281038252602181526020018061266c6021913960400191505060405180910390fd5b6000806106f884848c8c8c8c8c611901565b60408051838152602081018390528082018e9052606081018d905290519294509092506001600160a01b038a169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822919081900360800190a350506001600c55506d4946c0e9f43f4dee607b0ef1fa1c905063079d229f3361a3db601036025a8661520801030161374a018161078c57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156107d357600080fd5b505af11580156107e7573d6000803e3d6000fd5b505050506040513d60208110156107fd57600080fd5b5050505050505050565b6040518060600160405280602381526020016126fe6023913981565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b600061085a3384846119de565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b0383166000908152600260209081526040808320338452909152812054600019146108f8576001600160a01b03841660009081526002602090815260408083203384529091529020546108d39083611a40565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610903848484611a89565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b60095481565b600a5481565b6000805a9050600c54600114610999576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c819055806109a9610823565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b1580156109fd57600080fd5b505afa158015610a11573d6000803e3d6000fd5b505050506040513d6020811015610a2757600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610a7a57600080fd5b505afa158015610a8e573d6000803e3d6000fd5b505050506040513d6020811015610aa457600080fd5b505190506000610abd836001600160701b038716611a40565b90506000610ad4836001600160701b038716611a40565b90506000610ae28787611b37565b60005490915080610b1f57610b0b6103e8610b05610b008787611c77565b611cd0565b90611a40565b9950610b1a60006103e8611d22565b610b62565b610b5f6001600160701b038916610b368684611c77565b81610b3d57fe5b046001600160701b038916610b528685611c77565b81610b5957fe5b04611dac565b99505b60008a11610ba15760405162461bcd60e51b81526004018080602001828103825260288152602001806126b56028913960400191505060405180910390fd5b610bab8b8b611d22565b610bb786868a8a611dc2565b8115610be157600854610bdd906001600160701b0380821691600160701b900416611c77565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c55506d4946c0e9f43f4dee607b0ef1fa1c945063079d229f935033925061a3db915050601036025a8661520801030161374a0181610c5b57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015610ca257600080fd5b505af1158015610cb6573d6000803e3d6000fd5b505050506040513d6020811015610ccc57600080fd5b50919392505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b60008060005a9050600c54600114610d52576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c81905580610d62610823565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b158015610dbe57600080fd5b505afa158015610dd2573d6000803e3d6000fd5b505050506040513d6020811015610de857600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b158015610e3657600080fd5b505afa158015610e4a573d6000803e3d6000fd5b505050506040513d6020811015610e6057600080fd5b505130600090815260016020526040812054919250610e7f8888611b37565b60005490915080610e908487611c77565b81610e9757fe5b049b5080610ea58486611c77565b81610eac57fe5b049a5060008c118015610ebf575060008b115b610efa5760405162461bcd60e51b815260040180806020018281038252602881526020018061268d6028913960400191505060405180910390fd5b610f043084611faa565b610f0f878e8e61203c565b610f1a868e8d61203c565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b158015610f6057600080fd5b505afa158015610f74573d6000803e3d6000fd5b505050506040513d6020811015610f8a57600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b158015610fd657600080fd5b505afa158015610fea573d6000803e3d6000fd5b505050506040513d602081101561100057600080fd5b5051935061101085858b8b611dc2565b811561103a57600854611036906001600160701b0380821691600160701b900416611c77565b600b555b8c6001600160a01b0316336001600160a01b03167fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d819364968e8e604051808381526020018281526020019250505060405180910390a350506001600c55506d4946c0e9f43f4dee607b0ef1fa1c955063079d229f945033935061a3db9250506010360290505a8661520801030161374a01816110cf57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561111657600080fd5b505af115801561112a573d6000803e3d6000fd5b505050506040513d602081101561114057600080fd5b50929491935090915050565b6040518060400160405280600481526020017f445045580000000000000000000000000000000000000000000000000000000081525081565b600061085a338484611a89565b6103e881565b60005a9050600c546001146111e8576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b039485169490931692611291928592889261128c926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561125a57600080fd5b505afa15801561126e573d6000803e3d6000fd5b505050506040513d602081101561128457600080fd5b505190611a40565b61203c565b611305818561128c6008600e9054906101000a90046001600160701b03166001600160701b0316856001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561125a57600080fd5b50506001600c556d4946c0e9f43f4dee607b0ef1fa1c63079d229f3361a3db601036025a8661520801030161374a018161133b57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561138257600080fd5b505af1158015611396573d6000803e3d6000fd5b505050506040513d60208110156113ac57600080fd5b50505050565b60055460ff161561140a576040805162461bcd60e51b815260206004820152601460248201527f556e697377617056323a20464f5242494444454e000000000000000000000000604482015290519081900360640190fd5b60058054600680546001600160a01b039586167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054948616949091169390931790925560ff1992909316610100027fffffffffffffffffffffff0000000000000000000000000000000000000000ff90911617166001179055565b60055461010090046001600160a01b031681565b6007546001600160a01b031681565b42841015611507576040805162461bcd60e51b815260206004820152601260248201527f556e697377617056323a20455850495245440000000000000000000000000000604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa15801561163d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116735750886001600160a01b0316816001600160a01b0316145b6116c4576040805162461bcd60e51b815260206004820152601c60248201527f556e697377617056323a20494e56414c49445f5349474e415455524500000000604482015290519081900360640190fd5b6116cf8989896119de565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b60005a9050600c54600114611747576040805162461bcd60e51b8152602060048201526011602482015270155b9a5cddd85c158c8e881313d0d2d151607a1b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b81523060048201529051611857926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561179857600080fd5b505afa1580156117ac573d6000803e3d6000fd5b505050506040513d60208110156117c257600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561180f57600080fd5b505afa158015611823573d6000803e3d6000fd5b505050506040513d602081101561183957600080fd5b50516008546001600160701b0380821691600160701b900416611dc2565b6001600c556d4946c0e9f43f4dee607b0ef1fa1c63079d229f3361a3db601036025a8661520801030161374a018161188b57fe5b046040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b1580156118d257600080fd5b505af11580156118e6573d6000803e3d6000fd5b505050506040513d60208110156118fc57600080fd5b505050565b60008060008061191489898989896121ef565b91509150888b6001600160701b0316038211611931576000611940565b888b6001600160701b03160382035b9350878a6001600160701b031603811161195b57600061196a565b878a6001600160701b03160381035b9250600084118061197b5750600083115b6119b65760405162461bcd60e51b81526004018080602001828103825260248152602001806126486024913960400191505060405180910390fd5b6119c4828286868f8f61244a565b6119d082828d8d611dc2565b505097509795505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6000611a8283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506124fa565b9392505050565b6001600160a01b038316600090815260016020526040902054611aac9082611a40565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611adb9082612591565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560019054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611b8857600080fd5b505afa158015611b9c573d6000803e3d6000fd5b505050506040513d6020811015611bb257600080fd5b5051600b546001600160a01b038216158015945091925090611c63578015611c5e576000611bef610b006001600160701b03888116908816611c77565b90506000611bfc83611cd0565b905080821115611c5b576000611c1e611c158484611a40565b60005490611c77565b90506000611c3783611c31866005611c77565b90612591565b90506000818381611c4457fe5b0490508015611c5757611c578782611d22565b5050505b50505b611c6f565b8015611c6f576000600b555b505092915050565b600082611c865750600061085e565b82820282848281611c9357fe5b0414611a825760405162461bcd60e51b81526004018080602001828103825260218152602001806126dd6021913960400191505060405180910390fd5b60006003821115611d13575080600160028204015b81811015611d0d57809150600281828581611cfc57fe5b040181611d0557fe5b049050611ce5565b50611d1d565b8115611d1d575060015b919050565b600054611d2f9082612591565b60009081556001600160a01b038316815260016020526040902054611d549082612591565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310611dbb5781611a82565b5090919050565b6001600160701b038411801590611de057506001600160701b038311155b611e31576040805162461bcd60e51b815260206004820152601360248201527f556e697377617056323a204f564552464c4f5700000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611e6157506001600160701b03841615155b8015611e7557506001600160701b03831615155b15611ee0578063ffffffff16611e9d85611e8e866125eb565b6001600160e01b0316906125fd565b600980546001600160e01b03929092169290920201905563ffffffff8116611ec884611e8e876125eb565b600a80546001600160e01b0392909216929092020190555b600880547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166001600160701b03888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff16600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b038216600090815260016020526040902054611fcd9082611a40565b6001600160a01b03831660009081526001602052604081209190915554611ff49082611a40565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b03167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b602083106121025780518252601f1990920191602091820191016120e3565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114612164576040519150601f19603f3d011682016040523d82523d6000602084013e612169565b606091505b5091509150818015612197575080511580612197575080806020019051602081101561219457600080fd5b50515b6121e8576040805162461bcd60e51b815260206004820152601a60248201527f556e697377617056323a205452414e534645525f4641494c4544000000000000604482015290519081900360640190fd5b5050505050565b60065460075460009182916001600160a01b0391821691908116908716821480159061222d5750806001600160a01b0316876001600160a01b031614155b61227e576040805162461bcd60e51b815260206004820152601560248201527f556e697377617056323a20494e56414c49445f544f0000000000000000000000604482015290519081900360640190fd5b881561228f5761228f82888b61203c565b87156122a0576122a081888a61203c565b841561235257866001600160a01b03166310d1e85c338b8b8a8a6040518663ffffffff1660e01b815260040180866001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561233957600080fd5b505af115801561234d573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561239857600080fd5b505afa1580156123ac573d6000803e3d6000fd5b505050506040513d60208110156123c257600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b15801561240e57600080fd5b505afa158015612422573d6000803e3d6000fd5b505050506040513d602081101561243857600080fd5b50519399939850929650505050505050565b600061246661245a866003611c77565b610b05896103e8611c77565b9050600061247861245a866003611c77565b905061249d620f42406124976001600160701b03878116908716611c77565b90611c77565b6124a78383611c77565b10156107fd576040805162461bcd60e51b815260206004820152600c60248201527f556e697377617056323a204b0000000000000000000000000000000000000000604482015290519081900360640190fd5b600081848411156125895760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561254e578181015183820152602001612536565b50505050905090810190601f16801561257b5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b600082820183811015611a82576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161261a57fe5b04939250505056fe556e697377617056323a20494e53554646494349454e545f4f55545055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f494e5055545f414d4f554e54556e697377617056323a20494e53554646494349454e545f4c4951554944495459556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4255524e4544556e697377617056323a20494e53554646494349454e545f4c49515549444954595f4d494e544544536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77446563656e7472616c697a656420506173736976652045786368616e67652050616972a26469706673582212209a6f9d7309e653125a7dd69afc79fac6bbe80f878ecf2c44bdd20fb17a23831864736f6c63430007040033446563656e7472616c697a656420506173736976652045786368616e67652050616972";
