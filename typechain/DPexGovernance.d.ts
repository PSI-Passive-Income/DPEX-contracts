/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DPexGovernanceInterface extends ethers.utils.Interface {
  functions: {
    "governanceLevels(address)": FunctionFragment;
    "isGovernor(address)": FunctionFragment;
    "isMastermind(address)": FunctionFragment;
    "isPartner(address)": FunctionFragment;
    "isUser(address)": FunctionFragment;
    "killContract()": FunctionFragment;
    "setGovernanceLevel(address,uint256)": FunctionFragment;
    "viewGovernanceLevel(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "governanceLevels",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isGovernor", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isMastermind",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "isPartner", values: [string]): string;
  encodeFunctionData(functionFragment: "isUser", values: [string]): string;
  encodeFunctionData(
    functionFragment: "killContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setGovernanceLevel",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "viewGovernanceLevel",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "governanceLevels",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isGovernor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isMastermind",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isPartner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isUser", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "killContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setGovernanceLevel",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "viewGovernanceLevel",
    data: BytesLike
  ): Result;

  events: {
    "GovernanceLevelChanged(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GovernanceLevelChanged"): EventFragment;
}

export class DPexGovernance extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DPexGovernanceInterface;

  functions: {
    governanceLevels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "governanceLevels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    isGovernor(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isMastermind(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isMastermind(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isPartner(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isPartner(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isUser(_address: string, overrides?: CallOverrides): Promise<[boolean]>;

    "isUser(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    killContract(overrides?: Overrides): Promise<ContractTransaction>;

    "killContract()"(overrides?: Overrides): Promise<ContractTransaction>;

    setGovernanceLevel(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernanceLevel(address,uint256)"(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    viewGovernanceLevel(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "viewGovernanceLevel(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  governanceLevels(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "governanceLevels(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isGovernor(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isGovernor(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isMastermind(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isMastermind(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isPartner(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isPartner(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isUser(_address: string, overrides?: CallOverrides): Promise<boolean>;

  "isUser(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  killContract(overrides?: Overrides): Promise<ContractTransaction>;

  "killContract()"(overrides?: Overrides): Promise<ContractTransaction>;

  setGovernanceLevel(
    _address: string,
    _level: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernanceLevel(address,uint256)"(
    _address: string,
    _level: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  viewGovernanceLevel(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "viewGovernanceLevel(address)"(
    _address: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    governanceLevels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "governanceLevels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGovernor(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isMastermind(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isMastermind(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isPartner(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isPartner(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isUser(_address: string, overrides?: CallOverrides): Promise<boolean>;

    "isUser(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    killContract(overrides?: CallOverrides): Promise<void>;

    "killContract()"(overrides?: CallOverrides): Promise<void>;

    setGovernanceLevel(
      _address: string,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGovernanceLevel(address,uint256)"(
      _address: string,
      _level: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    viewGovernanceLevel(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewGovernanceLevel(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    GovernanceLevelChanged(
      addressChanged: string | null,
      oldLevel: null,
      newLevel: null
    ): EventFilter;
  };

  estimateGas: {
    governanceLevels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "governanceLevels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isGovernor(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isMastermind(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isMastermind(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isPartner(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isPartner(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isUser(_address: string, overrides?: CallOverrides): Promise<BigNumber>;

    "isUser(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    killContract(overrides?: Overrides): Promise<BigNumber>;

    "killContract()"(overrides?: Overrides): Promise<BigNumber>;

    setGovernanceLevel(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGovernanceLevel(address,uint256)"(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    viewGovernanceLevel(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "viewGovernanceLevel(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    governanceLevels(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "governanceLevels(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isGovernor(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isGovernor(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isMastermind(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isMastermind(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isPartner(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPartner(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isUser(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isUser(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    killContract(overrides?: Overrides): Promise<PopulatedTransaction>;

    "killContract()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setGovernanceLevel(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernanceLevel(address,uint256)"(
      _address: string,
      _level: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    viewGovernanceLevel(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "viewGovernanceLevel(address)"(
      _address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
