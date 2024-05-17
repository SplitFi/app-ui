/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  Contract,
  ContractFactory,
  Overrides,
  Interface,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Split, SplitInterface } from "../../contracts/Split";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "prevURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "ContractURIUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ERC20Withdrawal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "shares",
        type: "uint256",
      },
    ],
    name: "PayeeAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
  {
    inputs: [],
    name: "CONTRACT_METADATA_AUTHOR_ROLE",
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
    name: "DEFAULT_ADMIN_ROLE",
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
        internalType: "bool",
        name: "withdrawETH",
        type: "bool",
      },
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "batchWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "withdrawETH",
        type: "bool",
      },
      {
        internalType: "contract IERC20Upgradeable[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "batchWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "contractURI",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getPending",
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
        name: "account",
        type: "address",
      },
    ],
    name: "getPending",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "payees",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "shares_",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
      {
        internalType: "bool",
        name: "metadataLocked",
        type: "bool",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "payee",
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
    name: "payeeCount",
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uri",
        type: "string",
      },
    ],
    name: "setContractURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "shares",
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
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalShares",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
    ],
    name: "totalWithdrawn",
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
    name: "totalWithdrawn",
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
        internalType: "address payable",
        name: "account",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "withdrawn",
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
        internalType: "contract IERC20Upgradeable",
        name: "token",
        type: "address",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "withdrawn",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612547806100206000396000f3fe6080604052600436106101995760003560e01c806391d14854116100e1578063d086c2541161008a578063db78f7d411610064578063db78f7d414610534578063e8a3d48514610554578063f940e38514610576578063fef42bff1461059657600080fd5b8063d086c254146104ae578063d547741f146104ce578063dad13219146104ee57600080fd5b8063b9ef972d116100bb578063b9ef972d14610438578063cb6d0b4714610458578063ce7c2ac21461047857600080fd5b806391d14854146103bc578063938e3d7b14610403578063a217fddf1461042357600080fd5b806336568abe1161014357806351cff8d91161011d57806351cff8d91461032e5780636ef610921461034e5780638b83209b1461038457600080fd5b806336568abe146102e45780633a98ef39146103045780634b3197131461031957600080fd5b806314820f2f1161017457806314820f2f14610271578063248a9ca3146102915780632f2ff15d146102c257600080fd5b8062dbe109146101e757806301ffc9a71461020b5780630a64143a1461023b57600080fd5b366101e2577fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c33604080516001600160a01b0390921682523460208301520160405180910390a1005b600080fd5b3480156101f357600080fd5b506068545b6040519081526020015b60405180910390f35b34801561021757600080fd5b5061022b610226366004611d16565b6105ca565b6040519015158152602001610202565b34801561024757600080fd5b506101f8610256366004611d6d565b6001600160a01b03166000908152609d602052604090205490565b34801561027d57600080fd5b506101f861028c366004611d8a565b610663565b34801561029d57600080fd5b506101f86102ac366004611dc3565b6000908152610167602052604090206001015490565b3480156102ce57600080fd5b506102e26102dd366004611ddc565b61074c565b005b3480156102f057600080fd5b506102e26102ff366004611ddc565b610777565b34801561031057600080fd5b506066546101f8565b34801561032557600080fd5b50609b546101f8565b34801561033a57600080fd5b506102e2610349366004611d6d565b610808565b34801561035a57600080fd5b506101f8610369366004611d6d565b6001600160a01b03166000908152609c602052604090205490565b34801561039057600080fd5b506103a461039f366004611dc3565b610824565b6040516001600160a01b039091168152602001610202565b3480156103c857600080fd5b5061022b6103d7366004611ddc565b6000918252610167602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561040f57600080fd5b506102e261041e366004611eb8565b610854565b34801561042f57600080fd5b506101f8600081565b34801561044457600080fd5b506102e2610453366004611fa3565b6108b4565b34801561046457600080fd5b506102e2610473366004611ff3565b6108f1565b34801561048457600080fd5b506101f8610493366004611d6d565b6001600160a01b031660009081526067602052604090205490565b3480156104ba57600080fd5b506101f86104c9366004611d6d565b61095d565b3480156104da57600080fd5b506102e26104e9366004611ddc565b6109a0565b3480156104fa57600080fd5b506101f8610509366004611d8a565b6001600160a01b039182166000908152609e6020908152604080832093909416825291909152205490565b34801561054057600080fd5b506102e261054f3660046120b2565b6109c6565b34801561056057600080fd5b50610569610aee565b60405161020291906121f9565b34801561058257600080fd5b506102e2610591366004611d8a565b610b7c565b3480156105a257600080fd5b506101f87fcadb3be299fef351625c6f019b5faaba7bbd557439dd08568327d285caba89b281565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061065d57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b6001600160a01b0382166000908152609d602052604081205481906040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526001600160a01b038616906370a0823190602401602060405180830381865afa1580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff919061220c565b610709919061223b565b6001600160a01b038086166000908152609e60209081526040808320938816835292905220549091506107449084908390610b9a565b610b9a565b949350505050565b6000828152610167602052604090206001015461076881610bd8565b6107728383610be2565b505050565b6001600160a01b03811633146107fa5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c66000000000000000000000000000000000060648201526084015b60405180910390fd5b6108048282610c86565b5050565b8061081281610d0b565b6108048261081f8461095d565b610d96565b6000606882815481106108395761083961224e565b6000918252602090912001546001600160a01b031692915050565b61085c610e92565b6108a85760405162461bcd60e51b815260206004820181905260248201527f436f6e74726163744d657461646174613a204e6f7420617574686f72697a656460448201526064016107f1565b6108b181610ec3565b50565b336108be81610d0b565b60005b6068548110156108eb576108d9848461047384610824565b806108e381612264565b9150506108c1565b50505050565b336108fb81610d0b565b8161090581610d0b565b84156109145761091483610808565b60005b8451811015610955576109438582815181106109355761093561224e565b602002602001015185610b7c565b8061094d81612264565b915050610917565b505050505050565b600080610969609b5490565b610973904761223b565b9050610999838261073f866001600160a01b03166000908152609c602052604090205490565b9392505050565b600082815261016760205260409020600101546109bc81610bd8565b6107728383610c86565b600054610100900460ff16158080156109e65750600054600160ff909116105b80610a005750303b158015610a00575060005460ff166001145b610a725760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a656400000000000000000000000000000000000060648201526084016107f1565b6000805460ff191660011790558015610a95576000805461ff0019166101001790555b610aa185858585610f93565b8015610ae7576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050505050565b60018054610afb9061227e565b80601f0160208091040260200160405190810160405280929190818152602001828054610b279061227e565b8015610b745780601f10610b4957610100808354040283529160200191610b74565b820191906000526020600020905b815481529060010190602001808311610b5757829003601f168201915b505050505081565b80610b8681610d0b565b6107728383610b958686610663565b61103b565b6066546001600160a01b03841660009081526067602052604081205490918391610bc490866122b8565b610bce91906122d7565b61074491906122f9565b6108b1813361115f565b6000828152610167602090815260408083206001600160a01b038516845290915290205460ff16610804576000828152610167602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610c423390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b6000828152610167602090815260408083206001600160a01b038516845290915290205460ff1615610804576000828152610167602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b6001600160a01b0381166000908152606760205260409020546108b15760405162461bcd60e51b815260206004820152602360248201527f50617965654d616e616765723a206163636f756e7420686173206e6f2073686160448201527f726573000000000000000000000000000000000000000000000000000000000060648201526084016107f1565b80600003610e0c5760405162461bcd60e51b815260206004820152602b60248201527f57697468647261774d616e616765723a206163636f756e74206973206e6f742060448201527f647565207061796d656e7400000000000000000000000000000000000000000060648201526084016107f1565b80609b6000828254610e1e919061223b565b90915550506001600160a01b0382166000908152609c60205260409020805482019055610e4b82826111d5565b604080516001600160a01b0384168152602081018390527f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b6591015b60405180910390a15050565b6000610ebe7fcadb3be299fef351625c6f019b5faaba7bbd557439dd08568327d285caba89b2336103d7565b905090565b600060018054610ed29061227e565b80601f0160208091040260200160405190810160405280929190818152602001828054610efe9061227e565b8015610f4b5780601f10610f2057610100808354040283529160200191610f4b565b820191906000526020600020905b815481529060010190602001808311610f2e57829003601f168201915b505050505090508160019081610f619190612352565b507fc9c7c3fe08b88b4df9d4d47ef47d2c43d55c025a0ba88ca442580ed9e7348a168183604051610e86929190612412565b600054610100900460ff16610ffe5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016107f1565b61100884846112ee565b61101061147b565b61101861147b565b61102061147b565b611029826114e8565b6110338482611553565b6108eb61147b565b806000036110b15760405162461bcd60e51b815260206004820152602b60248201527f57697468647261774d616e616765723a206163636f756e74206973206e6f742060448201527f647565207061796d656e7400000000000000000000000000000000000000000060648201526084016107f1565b6001600160a01b0383166000908152609d6020526040812080548392906110d990849061223b565b90915550506001600160a01b038084166000908152609e6020908152604080832093861683529290522080548201905561111483838361162f565b604080516001600160a01b038481168252602082018490528516917f2fbb3e8dc2807d6a61feb98fc2120153f77b2c0d25ef6272e1756935dd62c847910160405180910390a2505050565b6000828152610167602090815260408083206001600160a01b038516845290915290205460ff1661080457611193816116af565b61119e8360206116c1565b6040516020016111af929190612440565b60408051601f198184030181529082905262461bcd60e51b82526107f1916004016121f9565b804710156112255760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016107f1565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114611272576040519150601f19603f3d011682016040523d82523d6000602084013e611277565b606091505b50509050806107725760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016107f1565b600054610100900460ff166113595760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016107f1565b80518251146113d05760405162461bcd60e51b815260206004820152602f60248201527f50617965654d616e616765723a2070617965657320616e64207368617265732060448201527f6c656e677468206d69736d61746368000000000000000000000000000000000060648201526084016107f1565b60008251116114215760405162461bcd60e51b815260206004820152601760248201527f50617965654d616e616765723a206e6f2070617965657300000000000000000060448201526064016107f1565b60005b8251811015610772576114698382815181106114425761144261224e565b602002602001015183838151811061145c5761145c61224e565b60200260200101516118ea565b8061147381612264565b915050611424565b600054610100900460ff166114e65760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016107f1565b565b600054610100900460ff166108a85760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016107f1565b600054610100900460ff166115be5760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b60648201526084016107f1565b6115c9600033611b04565b806108045760005b82518110156107725761161d7fcadb3be299fef351625c6f019b5faaba7bbd557439dd08568327d285caba89b28483815181106116105761161061224e565b6020026020010151611b04565b8061162781612264565b9150506115d1565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610772908490611b0e565b606061065d6001600160a01b03831660145b606060006116d08360026122b8565b6116db90600261223b565b67ffffffffffffffff8111156116f3576116f3611e01565b6040519080825280601f01601f19166020018201604052801561171d576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106117545761175461224e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f7800000000000000000000000000000000000000000000000000000000000000816001815181106117b7576117b761224e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006117f38460026122b8565b6117fe90600161223b565b90505b600181111561189b577f303132333435363738396162636465660000000000000000000000000000000085600f166010811061183f5761183f61224e565b1a60f81b8282815181106118555761185561224e565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060049490941c93611894816124c1565b9050611801565b5083156109995760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016107f1565b6001600160a01b0382166119665760405162461bcd60e51b815260206004820152602960248201527f50617965654d616e616765723a206163636f756e7420697320746865207a657260448201527f6f2061646472657373000000000000000000000000000000000000000000000060648201526084016107f1565b600081116119b65760405162461bcd60e51b815260206004820152601a60248201527f50617965654d616e616765723a2073686172657320617265203000000000000060448201526064016107f1565b6001600160a01b03821660009081526067602052604090205415611a425760405162461bcd60e51b815260206004820152602860248201527f50617965654d616e616765723a206163636f756e7420616c726561647920686160448201527f732073686172657300000000000000000000000000000000000000000000000060648201526084016107f1565b60688054600181019091557fa2153420d844928b4421650203c77babc8b33d7f2e7b450e2966db0c220977530180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0384169081179091556000908152606760205260409020819055606654611ac290829061223b565b606655604080516001600160a01b0384168152602081018390527f40c340f65e17194d14ddddb073d3c9f888e3cb52b5aae0c6c7706b4fbc905fac9101610e86565b6108048282610be2565b6000611b63826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611bf39092919063ffffffff16565b8051909150156107725780806020019051810190611b8191906124d8565b6107725760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016107f1565b6060610744848460008585600080866001600160a01b03168587604051611c1a91906124f5565b60006040518083038185875af1925050503d8060008114611c57576040519150601f19603f3d011682016040523d82523d6000602084013e611c5c565b606091505b5091509150611c6d87838387611c78565b979650505050505050565b60608315611ce7578251600003611ce0576001600160a01b0385163b611ce05760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016107f1565b5081610744565b6107448383815115611cfc5781518083602001fd5b8060405162461bcd60e51b81526004016107f191906121f9565b600060208284031215611d2857600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461099957600080fd5b6001600160a01b03811681146108b157600080fd5b600060208284031215611d7f57600080fd5b813561099981611d58565b60008060408385031215611d9d57600080fd5b8235611da881611d58565b91506020830135611db881611d58565b809150509250929050565b600060208284031215611dd557600080fd5b5035919050565b60008060408385031215611def57600080fd5b823591506020830135611db881611d58565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611e4057611e40611e01565b604052919050565b600082601f830112611e5957600080fd5b813567ffffffffffffffff811115611e7357611e73611e01565b611e866020601f19601f84011601611e17565b818152846020838601011115611e9b57600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215611eca57600080fd5b813567ffffffffffffffff811115611ee157600080fd5b61074484828501611e48565b80151581146108b157600080fd5b8035611f0681611eed565b919050565b600067ffffffffffffffff821115611f2557611f25611e01565b5060051b60200190565b600082601f830112611f4057600080fd5b81356020611f55611f5083611f0b565b611e17565b82815260059290921b84018101918181019086841115611f7457600080fd5b8286015b84811015611f98578035611f8b81611d58565b8352918301918301611f78565b509695505050505050565b60008060408385031215611fb657600080fd5b8235611fc181611eed565b9150602083013567ffffffffffffffff811115611fdd57600080fd5b611fe985828601611f2f565b9150509250929050565b60008060006060848603121561200857600080fd5b833561201381611eed565b9250602084013567ffffffffffffffff81111561202f57600080fd5b61203b86828701611f2f565b925050604084013561204c81611d58565b809150509250925092565b600082601f83011261206857600080fd5b81356020612078611f5083611f0b565b82815260059290921b8401810191818101908684111561209757600080fd5b8286015b84811015611f98578035835291830191830161209b565b600080600080608085870312156120c857600080fd5b843567ffffffffffffffff808211156120e057600080fd5b818701915087601f8301126120f457600080fd5b81356020612104611f5083611f0b565b82815260059290921b8401810191818101908b84111561212357600080fd5b948201945b8386101561214a57853561213b81611d58565b82529482019490820190612128565b9850508801359250508082111561216057600080fd5b61216c88838901612057565b9450604087013591508082111561218257600080fd5b5061218f87828801611e48565b92505061219e60608601611efb565b905092959194509250565b60005b838110156121c45781810151838201526020016121ac565b50506000910152565b600081518084526121e58160208601602086016121a9565b601f01601f19169290920160200192915050565b60208152600061099960208301846121cd565b60006020828403121561221e57600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b8082018082111561065d5761065d612225565b634e487b7160e01b600052603260045260246000fd5b6000600019820361227757612277612225565b5060010190565b600181811c9082168061229257607f821691505b6020821081036122b257634e487b7160e01b600052602260045260246000fd5b50919050565b60008160001904831182151516156122d2576122d2612225565b500290565b6000826122f457634e487b7160e01b600052601260045260246000fd5b500490565b8181038181111561065d5761065d612225565b601f82111561077257600081815260208120601f850160051c810160208610156123335750805b601f850160051c820191505b818110156109555782815560010161233f565b815167ffffffffffffffff81111561236c5761236c611e01565b6123808161237a845461227e565b8461230c565b602080601f8311600181146123b5576000841561239d5750858301515b600019600386901b1c1916600185901b178555610955565b600085815260208120601f198616915b828110156123e4578886015182559484019460019091019084016123c5565b50858210156124025787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60408152600061242560408301856121cd565b828103602084015261243781856121cd565b95945050505050565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516124788160178501602088016121a9565b7f206973206d697373696e6720726f6c652000000000000000000000000000000060179184019182015283516124b58160288401602088016121a9565b01602801949350505050565b6000816124d0576124d0612225565b506000190190565b6000602082840312156124ea57600080fd5b815161099981611eed565b600082516125078184602087016121a9565b919091019291505056fea26469706673582212209c346c5152a880e348892c02ba78b40c4437c097e8327f06975632f350fed3ad64736f6c63430008100033";

type SplitConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SplitConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Split__factory extends ContractFactory {
  constructor(...args: SplitConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<Split> {
    return super.deploy(overrides || {}) as Promise<Split>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Split {
    return super.attach(address) as Split;
  }
  override connect(signer: Signer): Split__factory {
    return super.connect(signer) as Split__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SplitInterface {
    return new Interface(_abi) as SplitInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Split {
    return new Contract(address, _abi, signerOrProvider) as Split;
  }
}
