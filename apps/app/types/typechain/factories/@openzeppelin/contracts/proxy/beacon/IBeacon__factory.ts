/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Interface, Signer} from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IBeacon,
  IBeaconInterface,
} from "../../../../../@openzeppelin/contracts/proxy/beacon/IBeacon";

const _abi = [
  {
    inputs: [],
    name: "implementation",
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
] as const;

export class IBeacon__factory {
  static readonly abi = _abi;
  static createInterface(): IBeaconInterface {
    return new Interface(_abi) as IBeaconInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IBeacon {
    return new Contract(address, _abi, signerOrProvider) as IBeacon;
  }
}
