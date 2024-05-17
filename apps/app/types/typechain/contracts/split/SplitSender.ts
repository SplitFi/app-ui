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

export interface SplitSenderInterface extends utils.Interface {
  functions: {
    "batchWithdraw(bool,address[])": FunctionFragment;
    "batchWithdraw(bool,address[],address)": FunctionFragment;
    "getPending(address,address)": FunctionFragment;
    "getPending(address)": FunctionFragment;
    "payee(uint256)": FunctionFragment;
    "payeeCount()": FunctionFragment;
    "shares(address)": FunctionFragment;
    "totalShares()": FunctionFragment;
    "totalWithdrawn(address)": FunctionFragment;
    "totalWithdrawn()": FunctionFragment;
    "withdraw(address)": FunctionFragment;
    "withdraw(address,address)": FunctionFragment;
    "withdrawn(address)": FunctionFragment;
    "withdrawn(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "batchWithdraw(bool,address[])"
      | "batchWithdraw(bool,address[],address)"
      | "getPending(address,address)"
      | "getPending(address)"
      | "payee"
      | "payeeCount"
      | "shares"
      | "totalShares"
      | "totalWithdrawn(address)"
      | "totalWithdrawn()"
      | "withdraw(address)"
      | "withdraw(address,address)"
      | "withdrawn(address)"
      | "withdrawn(address,address)",
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "batchWithdraw(bool,address[])",
    values: [PromiseOrValue<boolean>, PromiseOrValue<string>[]],
  ): string;
  encodeFunctionData(
    functionFragment: "batchWithdraw(bool,address[],address)",
    values: [
      PromiseOrValue<boolean>,
      PromiseOrValue<string>[],
      PromiseOrValue<string>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: "getPending(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "getPending(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "payee",
    values: [PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: "payeeCount",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "shares",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "totalShares",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "totalWithdrawn(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "totalWithdrawn()",
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawn(address)",
    values: [PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawn(address,address)",
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(
    functionFragment: "batchWithdraw(bool,address[])",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "batchWithdraw(bool,address[],address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPending(address,address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPending(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: "payee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payeeCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "shares", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalShares",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalWithdrawn(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalWithdrawn()",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdraw(address,address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawn(address)",
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawn(address,address)",
    data: BytesLike,
  ): Result;

  events: {
    "Deposit(address,uint256)": EventFragment;
    "ERC20Withdrawal(address,address,uint256)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "PayeeAdded(address,uint256)": EventFragment;
    "Withdrawal(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ERC20Withdrawal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PayeeAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
}

export interface DepositEventObject {
  from: string;
  amount: BigNumber;
}
export type DepositEvent = TypedEvent<[string, BigNumber], DepositEventObject>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export interface ERC20WithdrawalEventObject {
  token: string;
  to: string;
  amount: BigNumber;
}
export type ERC20WithdrawalEvent = TypedEvent<
  [string, string, BigNumber],
  ERC20WithdrawalEventObject
>;

export type ERC20WithdrawalEventFilter = TypedEventFilter<ERC20WithdrawalEvent>;

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

export interface WithdrawalEventObject {
  to: string;
  amount: BigNumber;
}
export type WithdrawalEvent = TypedEvent<
  [string, BigNumber],
  WithdrawalEventObject
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface SplitSender extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SplitSenderInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    "batchWithdraw(bool,address[])"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "batchWithdraw(bool,address[],address)"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "getPending(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "getPending(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string]>;

    payeeCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    "totalWithdrawn(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "totalWithdrawn()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    "withdraw(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "withdraw(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    "withdrawn(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    "withdrawn(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
  };

  "batchWithdraw(bool,address[])"(
    withdrawETH: PromiseOrValue<boolean>,
    tokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "batchWithdraw(bool,address[],address)"(
    withdrawETH: PromiseOrValue<boolean>,
    tokens: PromiseOrValue<string>[],
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "getPending(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "getPending(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  payee(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<string>;

  payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

  shares(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  "totalWithdrawn(address)"(
    token: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "totalWithdrawn()"(overrides?: CallOverrides): Promise<BigNumber>;

  "withdraw(address)"(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "withdraw(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  "withdrawn(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  "withdrawn(address,address)"(
    token: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  callStatic: {
    "batchWithdraw(bool,address[])"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<void>;

    "batchWithdraw(bool,address[],address)"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "getPending(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "getPending(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<string>;

    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalWithdrawn(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "totalWithdrawn()"(overrides?: CallOverrides): Promise<BigNumber>;

    "withdraw(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "withdraw(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<void>;

    "withdrawn(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "withdrawn(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {
    "Deposit(address,uint256)"(from?: null, amount?: null): DepositEventFilter;
    Deposit(from?: null, amount?: null): DepositEventFilter;

    "ERC20Withdrawal(address,address,uint256)"(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
    ): ERC20WithdrawalEventFilter;
    ERC20Withdrawal(
      token?: PromiseOrValue<string> | null,
      to?: null,
      amount?: null,
    ): ERC20WithdrawalEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "PayeeAdded(address,uint256)"(
      account?: null,
      shares?: null,
    ): PayeeAddedEventFilter;
    PayeeAdded(account?: null, shares?: null): PayeeAddedEventFilter;

    "Withdrawal(address,uint256)"(
      to?: null,
      amount?: null,
    ): WithdrawalEventFilter;
    Withdrawal(to?: null, amount?: null): WithdrawalEventFilter;
  };

  estimateGas: {
    "batchWithdraw(bool,address[])"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "batchWithdraw(bool,address[],address)"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "getPending(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "getPending(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    payeeCount(overrides?: CallOverrides): Promise<BigNumber>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    "totalWithdrawn(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "totalWithdrawn()"(overrides?: CallOverrides): Promise<BigNumber>;

    "withdraw(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "withdraw(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    "withdrawn(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    "withdrawn(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    "batchWithdraw(bool,address[])"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "batchWithdraw(bool,address[],address)"(
      withdrawETH: PromiseOrValue<boolean>,
      tokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "getPending(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "getPending(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    payee(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    payeeCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    shares(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalWithdrawn(address)"(
      token: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "totalWithdrawn()"(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "withdraw(address)"(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    "withdrawn(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    "withdrawn(address,address)"(
      token: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
