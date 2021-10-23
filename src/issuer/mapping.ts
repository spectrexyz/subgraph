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
  WithdrawProposal,
} from '../../generated/Issuer/Issuer';

import { Issuance, sERC20, Spectre, Pool } from '../../generated/schema';
import { Pool as PoolContract } from '../../generated/Issuer/Pool'; // move it to vault in the YAML file to fetch the isToken0 thing

export function handleAcceptProposal(event: AcceptProposal): void {}

export function handleClose(event: Close): void {
  // let id = event.params.sERC20.toHexString();
  // let issuance = Issuance.load(id);
  // issuance.state = 'Closed';
  // issuance.save();
}

export function handleCreateProposal(event: CreateProposal): void {}

export function handleEnableFlashIssuance(event: EnableFlashIssuance): void {
  // we need to invert event ordering and redeploy first
  // let id = event.params.sERC20.toHexString();
  // let issuance = Issuance.load(id)!;
  // issuance.flash = true;
  // issuance.save();
}

export function handleIssue(event: Issue): void {}

export function handleRegister(event: Register): void {
  let id = event.params.sERC20.toHexString();
  let poolId = event.params.poolId.toHexString();
  let serc20 = sERC20.load(id)!;
  let issuance = new Issuance(id);
  let pool = new Pool(poolId);
  let _pool = PoolContract.bind(event.params.pool);

  pool.address = event.params.pool;
  pool.sERC20 = id;
  pool.sERC20IsToken0 = pool.sERC20IsToken0;
  pool.save();

  serc20.pool = poolId;
  serc20.save();

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

export function handleWithdrawProposal(event: WithdrawProposal): void {}
