// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AcceptProposal extends ethereum.Event {
  get params(): AcceptProposal__Params {
    return new AcceptProposal__Params(this);
  }
}

export class AcceptProposal__Params {
  _event: AcceptProposal;

  constructor(event: AcceptProposal) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Close extends ethereum.Event {
  get params(): Close__Params {
    return new Close__Params(this);
  }
}

export class Close__Params {
  _event: Close;

  constructor(event: Close) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CreateProposal extends ethereum.Event {
  get params(): CreateProposal__Params {
    return new CreateProposal__Params(this);
  }
}

export class CreateProposal__Params {
  _event: CreateProposal;

  constructor(event: CreateProposal) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get expiration(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class EnableFlashIssuance extends ethereum.Event {
  get params(): EnableFlashIssuance__Params {
    return new EnableFlashIssuance__Params(this);
  }
}

export class EnableFlashIssuance__Params {
  _event: EnableFlashIssuance;

  constructor(event: EnableFlashIssuance) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Issue extends ethereum.Event {
  get params(): Issue__Params {
    return new Issue__Params(this);
  }
}

export class Issue__Params {
  _event: Issue;

  constructor(event: Issue) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class Register extends ethereum.Event {
  get params(): Register__Params {
    return new Register__Params(this);
  }
}

export class Register__Params {
  _event: Register;

  constructor(event: Register) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get guardian(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get pool(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get poolId(): Bytes {
    return this._event.parameters[3].value.toBytes();
  }

  get sMaxNormalizedWeight(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get sMinNormalizedWeight(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get swapFeePercentage(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }

  get reserve(): BigInt {
    return this._event.parameters[7].value.toBigInt();
  }

  get allocation(): BigInt {
    return this._event.parameters[8].value.toBigInt();
  }

  get fee(): BigInt {
    return this._event.parameters[9].value.toBigInt();
  }
}

export class RejectProposal extends ethereum.Event {
  get params(): RejectProposal__Params {
    return new RejectProposal__Params(this);
  }
}

export class RejectProposal__Params {
  _event: RejectProposal;

  constructor(event: RejectProposal) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class SetBank extends ethereum.Event {
  get params(): SetBank__Params {
    return new SetBank__Params(this);
  }
}

export class SetBank__Params {
  _event: SetBank;

  constructor(event: SetBank) {
    this._event = event;
  }

  get bank(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class SetProtocolFee extends ethereum.Event {
  get params(): SetProtocolFee__Params {
    return new SetProtocolFee__Params(this);
  }
}

export class SetProtocolFee__Params {
  _event: SetProtocolFee;

  constructor(event: SetProtocolFee) {
    this._event = event;
  }

  get protocolFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class WithdrawProposal extends ethereum.Event {
  get params(): WithdrawProposal__Params {
    return new WithdrawProposal__Params(this);
  }
}

export class WithdrawProposal__Params {
  _event: WithdrawProposal;

  constructor(event: WithdrawProposal) {
    this._event = event;
  }

  get sERC20(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Issuer__issuanceOfResult {
  value0: i32;
  value1: Address;
  value2: Address;
  value3: Bytes;
  value4: BigInt;
  value5: BigInt;
  value6: BigInt;
  value7: BigInt;
  value8: boolean;
  value9: boolean;

  constructor(
    value0: i32,
    value1: Address,
    value2: Address,
    value3: Bytes,
    value4: BigInt,
    value5: BigInt,
    value6: BigInt,
    value7: BigInt,
    value8: boolean,
    value9: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
    this.value7 = value7;
    this.value8 = value8;
    this.value9 = value9;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromFixedBytes(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    map.set("value7", ethereum.Value.fromUnsignedBigInt(this.value7));
    map.set("value8", ethereum.Value.fromBoolean(this.value8));
    map.set("value9", ethereum.Value.fromBoolean(this.value9));
    return map;
  }
}

export class Issuer__proposalForResult {
  value0: i32;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: i32,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set(
      "value0",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value0))
    );
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class Issuer extends ethereum.SmartContract {
  static bind(address: Address): Issuer {
    return new Issuer("Issuer", address);
  }

  CLOSE_ROLE(): Bytes {
    let result = super.call("CLOSE_ROLE", "CLOSE_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_CLOSE_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("CLOSE_ROLE", "CLOSE_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DECIMALS(): BigInt {
    let result = super.call("DECIMALS", "DECIMALS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DECIMALS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DECIMALS", "DECIMALS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  HUNDRED(): BigInt {
    let result = super.call("HUNDRED", "HUNDRED():(uint256)", []);

    return result[0].toBigInt();
  }

  try_HUNDRED(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("HUNDRED", "HUNDRED():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  REGISTER_ROLE(): Bytes {
    let result = super.call("REGISTER_ROLE", "REGISTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REGISTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "REGISTER_ROLE",
      "REGISTER_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  WETH(): Address {
    let result = super.call("WETH", "WETH():(address)", []);

    return result[0].toAddress();
  }

  try_WETH(): ethereum.CallResult<Address> {
    let result = super.tryCall("WETH", "WETH():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  bank(): Address {
    let result = super.call("bank", "bank():(address)", []);

    return result[0].toAddress();
  }

  try_bank(): ethereum.CallResult<Address> {
    let result = super.tryCall("bank", "bank():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  issuanceOf(sERC20: Address): Issuer__issuanceOfResult {
    let result = super.call(
      "issuanceOf",
      "issuanceOf(address):(uint8,address,address,bytes32,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromAddress(sERC20)]
    );

    return new Issuer__issuanceOfResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBytes(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBigInt(),
      result[7].toBigInt(),
      result[8].toBoolean(),
      result[9].toBoolean()
    );
  }

  try_issuanceOf(
    sERC20: Address
  ): ethereum.CallResult<Issuer__issuanceOfResult> {
    let result = super.tryCall(
      "issuanceOf",
      "issuanceOf(address):(uint8,address,address,bytes32,uint256,uint256,uint256,uint256,bool,bool)",
      [ethereum.Value.fromAddress(sERC20)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Issuer__issuanceOfResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBytes(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBigInt(),
        value[7].toBigInt(),
        value[8].toBoolean(),
        value[9].toBoolean()
      )
    );
  }

  poolFactory(): Address {
    let result = super.call("poolFactory", "poolFactory():(address)", []);

    return result[0].toAddress();
  }

  try_poolFactory(): ethereum.CallResult<Address> {
    let result = super.tryCall("poolFactory", "poolFactory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  priceOf(sERC20: Address): BigInt {
    let result = super.call("priceOf", "priceOf(address):(uint256)", [
      ethereum.Value.fromAddress(sERC20)
    ]);

    return result[0].toBigInt();
  }

  try_priceOf(sERC20: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("priceOf", "priceOf(address):(uint256)", [
      ethereum.Value.fromAddress(sERC20)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  proposalFor(sERC20: Address, proposalId: BigInt): Issuer__proposalForResult {
    let result = super.call(
      "proposalFor",
      "proposalFor(address,uint256):(uint8,address,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(sERC20),
        ethereum.Value.fromUnsignedBigInt(proposalId)
      ]
    );

    return new Issuer__proposalForResult(
      result[0].toI32(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_proposalFor(
    sERC20: Address,
    proposalId: BigInt
  ): ethereum.CallResult<Issuer__proposalForResult> {
    let result = super.tryCall(
      "proposalFor",
      "proposalFor(address,uint256):(uint8,address,uint256,uint256,uint256)",
      [
        ethereum.Value.fromAddress(sERC20),
        ethereum.Value.fromUnsignedBigInt(proposalId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Issuer__proposalForResult(
        value[0].toI32(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  protocolFee(): BigInt {
    let result = super.call("protocolFee", "protocolFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_protocolFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("protocolFee", "protocolFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  splitter(): Address {
    let result = super.call("splitter", "splitter():(address)", []);

    return result[0].toAddress();
  }

  try_splitter(): ethereum.CallResult<Address> {
    let result = super.tryCall("splitter", "splitter():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  twapOf(sERC20: Address, kind: i32): BigInt {
    let result = super.call("twapOf", "twapOf(address,uint8):(uint256)", [
      ethereum.Value.fromAddress(sERC20),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(kind))
    ]);

    return result[0].toBigInt();
  }

  try_twapOf(sERC20: Address, kind: i32): ethereum.CallResult<BigInt> {
    let result = super.tryCall("twapOf", "twapOf(address,uint8):(uint256)", [
      ethereum.Value.fromAddress(sERC20),
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(kind))
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  vault(): Address {
    let result = super.call("vault", "vault():(address)", []);

    return result[0].toAddress();
  }

  try_vault(): ethereum.CallResult<Address> {
    let result = super.tryCall("vault", "vault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get vault_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get poolFactory_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get splitter_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get bank_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get protocolFee_(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptProposalCall extends ethereum.Call {
  get inputs(): AcceptProposalCall__Inputs {
    return new AcceptProposalCall__Inputs(this);
  }

  get outputs(): AcceptProposalCall__Outputs {
    return new AcceptProposalCall__Outputs(this);
  }
}

export class AcceptProposalCall__Inputs {
  _call: AcceptProposalCall;

  constructor(call: AcceptProposalCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class AcceptProposalCall__Outputs {
  _call: AcceptProposalCall;

  constructor(call: AcceptProposalCall) {
    this._call = call;
  }
}

export class CloseCall extends ethereum.Call {
  get inputs(): CloseCall__Inputs {
    return new CloseCall__Inputs(this);
  }

  get outputs(): CloseCall__Outputs {
    return new CloseCall__Outputs(this);
  }
}

export class CloseCall__Inputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CloseCall__Outputs {
  _call: CloseCall;

  constructor(call: CloseCall) {
    this._call = call;
  }
}

export class CreateProposalCall extends ethereum.Call {
  get inputs(): CreateProposalCall__Inputs {
    return new CreateProposalCall__Inputs(this);
  }

  get outputs(): CreateProposalCall__Outputs {
    return new CreateProposalCall__Outputs(this);
  }
}

export class CreateProposalCall__Inputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get lifespan(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class CreateProposalCall__Outputs {
  _call: CreateProposalCall;

  constructor(call: CreateProposalCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class EnableFlashIssuanceCall extends ethereum.Call {
  get inputs(): EnableFlashIssuanceCall__Inputs {
    return new EnableFlashIssuanceCall__Inputs(this);
  }

  get outputs(): EnableFlashIssuanceCall__Outputs {
    return new EnableFlashIssuanceCall__Outputs(this);
  }
}

export class EnableFlashIssuanceCall__Inputs {
  _call: EnableFlashIssuanceCall;

  constructor(call: EnableFlashIssuanceCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class EnableFlashIssuanceCall__Outputs {
  _call: EnableFlashIssuanceCall;

  constructor(call: EnableFlashIssuanceCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class IssueCall extends ethereum.Call {
  get inputs(): IssueCall__Inputs {
    return new IssueCall__Inputs(this);
  }

  get outputs(): IssueCall__Outputs {
    return new IssueCall__Outputs(this);
  }
}

export class IssueCall__Inputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get expected(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class IssueCall__Outputs {
  _call: IssueCall;

  constructor(call: IssueCall) {
    this._call = call;
  }
}

export class RegisterCall extends ethereum.Call {
  get inputs(): RegisterCall__Inputs {
    return new RegisterCall__Inputs(this);
  }

  get outputs(): RegisterCall__Outputs {
    return new RegisterCall__Outputs(this);
  }
}

export class RegisterCall__Inputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get guardian(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get sMaxNormalizedWeight(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get sMinNormalizedWeight(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get swapFeePercentage(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get reserve(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get allocation(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }

  get fee(): BigInt {
    return this._call.inputValues[7].value.toBigInt();
  }

  get flash(): boolean {
    return this._call.inputValues[8].value.toBoolean();
  }
}

export class RegisterCall__Outputs {
  _call: RegisterCall;

  constructor(call: RegisterCall) {
    this._call = call;
  }
}

export class RejectProposalCall extends ethereum.Call {
  get inputs(): RejectProposalCall__Inputs {
    return new RejectProposalCall__Inputs(this);
  }

  get outputs(): RejectProposalCall__Outputs {
    return new RejectProposalCall__Outputs(this);
  }
}

export class RejectProposalCall__Inputs {
  _call: RejectProposalCall;

  constructor(call: RejectProposalCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class RejectProposalCall__Outputs {
  _call: RejectProposalCall;

  constructor(call: RejectProposalCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetBankCall extends ethereum.Call {
  get inputs(): SetBankCall__Inputs {
    return new SetBankCall__Inputs(this);
  }

  get outputs(): SetBankCall__Outputs {
    return new SetBankCall__Outputs(this);
  }
}

export class SetBankCall__Inputs {
  _call: SetBankCall;

  constructor(call: SetBankCall) {
    this._call = call;
  }

  get bank_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetBankCall__Outputs {
  _call: SetBankCall;

  constructor(call: SetBankCall) {
    this._call = call;
  }
}

export class SetProtocolFeeCall extends ethereum.Call {
  get inputs(): SetProtocolFeeCall__Inputs {
    return new SetProtocolFeeCall__Inputs(this);
  }

  get outputs(): SetProtocolFeeCall__Outputs {
    return new SetProtocolFeeCall__Outputs(this);
  }
}

export class SetProtocolFeeCall__Inputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }

  get protocolFee_(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SetProtocolFeeCall__Outputs {
  _call: SetProtocolFeeCall;

  constructor(call: SetProtocolFeeCall) {
    this._call = call;
  }
}

export class WithdrawProposalCall extends ethereum.Call {
  get inputs(): WithdrawProposalCall__Inputs {
    return new WithdrawProposalCall__Inputs(this);
  }

  get outputs(): WithdrawProposalCall__Outputs {
    return new WithdrawProposalCall__Outputs(this);
  }
}

export class WithdrawProposalCall__Inputs {
  _call: WithdrawProposalCall;

  constructor(call: WithdrawProposalCall) {
    this._call = call;
  }

  get sERC20(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get proposalId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawProposalCall__Outputs {
  _call: WithdrawProposalCall;

  constructor(call: WithdrawProposalCall) {
    this._call = call;
  }
}
