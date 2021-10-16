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
import { Issuance, sERC20, Spectre } from '../../generated/schema';

export function handleAcceptProposal(event: AcceptProposal): void {}

export function handleClose(event: Close): void {
  // let id = event.params.sERC20.toHexString();
  // let issuance = Issuance.load(id);
  // issuance.state = 'Closed';
  // issuance.save();
}

export function handleCreateProposal(event: CreateProposal): void {}

export function handleEnableFlashIssuance(event: EnableFlashIssuance): void {
  let id = event.params.sERC20.toHexString();
  let issuance = Issuance.load(id)!;

  issuance.flash = true;
  issuance.save();
}

export function handleIssue(event: Issue): void {}

export function handleRegister(event: Register): void {
  let id = event.params.sERC20.toHexString();
  let serc20 = sERC20.load(id)!;
  let issuance = new Issuance(id);

  issuance.spectre = serc20.spectre;
  issuance.state = 'Opened';
  issuance.guardian = event.params.guardian;
  issuance.pool = event.params.pool;
  issuance.poolId = event.params.poolId;
  issuance.reserve = event.params.reserve;
  issuance.allocation = event.params.allocation;
  issuance.fee = event.params.fee;
  issuance.nbOfProposals = BigInt.fromI32(0);
  issuance.save();

  let spectre = Spectre.load(serc20.spectre)!;
  spectre.issuance = id;
  spectre.save();
}

export function handleRejectProposal(event: RejectProposal): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetBank(event: SetBank): void {}

export function handleSetProtocolFee(event: SetProtocolFee): void {}

export function handleWithdrawProposal(event: WithdrawProposal): void {}
