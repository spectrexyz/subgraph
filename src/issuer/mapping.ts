import { BigInt } from '@graphprotocol/graph-ts';
import {
  Issuer,
  AcceptProposal,
  Close,
  CreateProposal,
  EnableFlashIssuance,
  Issue,
  Register,
  RejectProposal,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetBank,
  SetProtocolFee,
  WithdrawProposal,
} from '../../generated/Issuer/Issuer';
import { Issuance } from '../../generated/schema';

export function handleAcceptProposal(event: AcceptProposal): void {
  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.
  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.CLOSE_ROLE(...)
  // - contract.DECIMALS(...)
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.HUNDRED(...)
  // - contract.REGISTER_ROLE(...)
  // - contract.WETH(...)
  // - contract.bank(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.hasRole(...)
  // - contract.issuanceOf(...)
  // - contract.poolFactory(...)
  // - contract.priceOf(...)
  // - contract.proposalFor(...)
  // - contract.protocolFee(...)
  // - contract.splitter(...)
  // - contract.supportsInterface(...)
  // - contract.twapOf(...)
  // - contract.vault(...)
}

export function handleClose(event: Close): void {}

export function handleCreateProposal(event: CreateProposal): void {}

export function handleEnableFlashIssuance(event: EnableFlashIssuance): void {}

export function handleIssue(event: Issue): void {}

export function handleRegister(event: Register): void {}

export function handleRejectProposal(event: RejectProposal): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetBank(event: SetBank): void {}

export function handleSetProtocolFee(event: SetProtocolFee): void {}

export function handleWithdrawProposal(event: WithdrawProposal): void {}
