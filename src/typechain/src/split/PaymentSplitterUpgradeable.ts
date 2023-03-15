/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface PaymentSplitterUpgradeableInterface extends utils.Interface {
  functions: {
    "payee(uint256)": FunctionFragment;
    "payeeCount()": FunctionFragment;
    "releasable(address)": FunctionFragment;
    "releasable(address,address)": FunctionFragment;
    "release(address)": FunctionFragment;
    "release(address,address)": FunctionFragment;
    "released(address,address)": FunctionFragment;
    "released(address)": FunctionFragment;
    "shares(address)": FunctionFragment;
    "totalReleased(address)": FunctionFragment;
    "totalReleased()": FunctionFragment;
    "totalShares()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "payee"
      | "payeeCount"
      | "releasable(address)"
      | "releasable(address,address)"
      | "release(address)"
      | "release(address,address)"
      | "released(address,address)"
      | "released(address)"
      | "shares"
      | "totalReleased(address)"
      | "totalReleased()"
      | "totalShares"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "payee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "payeeCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "releasable(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "release(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "released(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "shares",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased(address)",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReleased()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payeeCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "releasable(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "release(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "released(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReleased()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike
  ): Result;

  events: {
    "ERC20PaymentReleased(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "PaymentReceived(address,uint256)": EventFragment;
    "PaymentReleased(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ERC20PaymentReleased"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReceived"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PaymentReleased"): EventFragment;
}

export interface ERC20PaymentReleasedEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type ERC20PaymentReleasedEvent = TypedEvent<
  [string, string, BigNumber],
  ERC20PaymentReleasedEventObject
>;

export type ERC20PaymentReleasedEventFilter =
  TypedEventFilter<ERC20PaymentReleasedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface PayeeAddedEventObject {
  account: string;
  shares: BigNumber;
}
export type PayeeAddedEvent = TypedEvent<
  [string, BigNumber],
  PayeeAddedEventObject
>;

export type PayeeAddedEventFilter = TypedEventFilter<PayeeAddedEvent>;

export interface PaymentReceivedEventObject {
  from: string;
  amount: BigNumber;
}
export type PaymentReceivedEvent = TypedEvent<
  [string, BigNumber],
  PaymentReceivedEventObject
>;

export type PaymentReceivedEventFilter = TypedEventFilter<PaymentReceivedEvent>;

export interface PaymentReleasedEventObject {
  to: string;
  amount: BigNumber;
}
export type PaymentReleasedEvent = TypedEvent<
  [string, BigNumber],
  PaymentReleasedEventObject
>;

export type PaymentReleasedEventFilter = TypedEventFilter<PaymentReleasedEvent>;

export interface PaymentSplitterUpgradeable extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PaymentSplitterUpgradeableInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    payeeCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalReleased()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  payee(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

  "releasable(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "releasable(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "release(address)"(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "release(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  "released(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "released(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  shares(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalReleased(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ERC20PaymentReleased(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ERC20PaymentReleasedEventFilter;
    ERC20PaymentReleased(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null
    ): ERC20PaymentReleasedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null
    ): PayeeAddedEventFilter;
    PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;

    "PaymentReceived(address,uint256)"(
      from?: null,
      amount?: null
    ): PaymentReceivedEventFilter;
    PaymentReceived(from?: null, amount?: null): PaymentReceivedEventFilter;

    "PaymentReleased(address,uint256)"(
      to?: null,
      amount?: null
    ): PaymentReleasedEventFilter;
    PaymentReleased(to?: null, amount?: null): PaymentReleasedEventFilter;
  };

  estimateGas: {
    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalReleased()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    payeeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "releasable(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "releasable(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "release(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "release(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    "released(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "released(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalReleased(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalReleased()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
