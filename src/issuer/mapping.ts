import {
  AcceptProposal,
  Close,
  CreateProposal,
  EnableFlashIssuance,
  Issue as IssueEvent,
  Register,
  RejectProposal,
  WithdrawProposal,
} from '../../generated/Issuer/Issuer';
import { Issue, Issuance, IssuanceProposal, sERC20, Pool } from '../../generated/schema';
import { Pool as _Pool_ } from '../../generated/Issuer/Pool';

export function handleRegister(event: Register): void {
  let id = event.params.sERC20.toHexString();
  let poolId = event.params.poolId.toHexString();

  let pool = new Pool(poolId);
  pool.address = event.params.pool;
  pool.sERC20 = id;
  pool.sERC20IsToken0 = _Pool_.bind(event.params.pool).sERC20IsToken0();
  pool.save();

  let issuance = new Issuance(id);
  issuance.sERC20 = id;
  issuance.state = 'Opened';
  issuance.guardian = event.params.guardian;
  issuance.pool = event.params.pool;
  issuance.poolId = event.params.poolId;
  issuance.reserve = event.params.reserve;
  issuance.allocation = event.params.allocation;
  issuance.fee = event.params.fee;
  issuance.save();

  let _sERC20 = sERC20.load(id)!;
  _sERC20.pool = poolId;
  _sERC20.issuance = id;
  _sERC20.save();
}

export function handleEnableFlashIssuance(event: EnableFlashIssuance): void {
  // we need to invert event ordering and redeploy first
  // let id = event.params.sERC20.toHexString();
  // let issuance = new Issuance(id);
  // issuance.flash = true;
  // issuance.save();
}

export function handleCreateProposal(event: CreateProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = new IssuanceProposal(id);
  proposal.issuance = event.params.sERC20.toHexString();
  proposal.state = 'Pending';
  proposal.timestamp = event.block.timestamp;
  proposal.buyer = event.params.buyer;
  proposal.value = event.params.value;
  proposal.price = event.params.price;
  proposal.expiration = event.params.expiration;

  proposal.save();
}

export function handleAcceptProposal(event: AcceptProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id)!;
  proposal.state = 'Accepted';

  proposal.save();
}

export function handleRejectProposal(event: RejectProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id)!;
  proposal.state = 'Rejected';

  proposal.save();
}

export function handleWithdrawProposal(event: WithdrawProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id)!;
  proposal.state = 'Withdrawn';

  proposal.save();
}

export function handleClose(event: Close): void {
  // We need to add an sERC20 params in the close event that we forgot
  // let id = event.params.sERC20.toHexString();
  // let issuance = Issuance.load(id);
  // issuance.state = 'Closed';
  // issuance.save();
}

export function handleIssue(event: IssueEvent): void {
  let id = event.transaction.hash.toHex() + '#' + event.logIndex.toString();
  let issue = new Issue(id);

  issue.issuance = event.params.sERC20.toHexString();
  issue.timestamp = event.block.timestamp;
  issue.recipient = event.params.recipient;
  issue.value = event.params.value;
  issue.amount = event.params.amount;

  issue.save();
}
