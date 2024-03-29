import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  AcceptProposal,
  Close,
  CreateProposal,
  EnableFlashIssuance,
  Issue as IssueEvent,
  Issuer as _Issuer_,
  Register,
  RejectProposal,
  WithdrawProposal,
} from '../../generated/Issuer/Issuer';
import { Pool as _Pool_ } from '../../generated/Issuer/Pool';
import {
  Issuance,
  IssuanceProposal,
  Issue,
  Pool,
  sERC20,
} from '../../generated/schema';

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

  let _sERC20 = sERC20.load(id);
  if (!_sERC20) throw new Error('Can’t load schema');

  let _issuer_ = _Issuer_.bind(
    Address.fromString('0x93B9698EE8d5267B4AcB8DbA35467685142A2dc4'),
  );

  _sERC20.pool = poolId;
  _sERC20.issuance = id;

  let priceResult = _issuer_.try_priceOf(event.params.sERC20);
  if (priceResult.reverted) {
    _sERC20.price = BigInt.fromI32(0);
  } else {
    _sERC20.price = priceResult.value;
  }

  _sERC20.save();
}

export function handleEnableFlashIssuance(event: EnableFlashIssuance): void {
  let id = event.params.sERC20.toHexString();
  let issuance = Issuance.load(id);
  if (!issuance) throw new Error('Can’t load schema');

  issuance.flash = true;
  issuance.save();
}

export function handleCreateProposal(event: CreateProposal): void {
  let id = event.params.sERC20.toHexString() + '#'
    + event.params.proposalId.toString();

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
  let id = event.params.sERC20.toHexString() + '#'
    + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id);
  if (!proposal) throw new Error('Can’t load schema');
  proposal.state = 'Accepted';

  proposal.save();
}

export function handleRejectProposal(event: RejectProposal): void {
  let id = event.params.sERC20.toHexString() + '#'
    + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id);
  if (!proposal) throw new Error('Can’t load schema');
  proposal.state = 'Rejected';

  proposal.save();
}

export function handleWithdrawProposal(event: WithdrawProposal): void {
  let id = event.params.sERC20.toHexString() + '#'
    + event.params.proposalId.toString();

  let proposal = IssuanceProposal.load(id);
  if (!proposal) throw new Error('Can’t load schema');
  proposal.state = 'Withdrawn';

  proposal.save();
}

export function handleClose(event: Close): void {
  let id = event.params.sERC20.toHexString();

  let issuance = Issuance.load(id);
  if (!issuance) throw new Error('Can’t load schema');
  issuance.state = 'Closed';
  issuance.save();
}

export function handleIssue(event: IssueEvent): void {
  let id = event.transaction.hash.toHex() + '#' + event.logIndex.toString();
  let issue = new Issue(id);

  issue.issuance = event.params.sERC20.toHexString();
  issue.timestamp = event.block.timestamp;
  issue.recipient = event.params.recipient;
  issue.value = event.params.value;
  issue.amount = event.params.amount;

  let _sERC20 = sERC20.load(event.params.sERC20.toHexString());
  if (!_sERC20) throw new Error('Can’t load schema');
  _sERC20.minted = _sERC20.minted.plus(event.params.amount);
  _sERC20.save();

  issue.save();
}
