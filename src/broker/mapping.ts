import { BigInt } from '@graphprotocol/graph-ts';
import {
  AcceptProposal,
  Buyout,
  Claim,
  CreateProposal,
  DisableEscape,
  EnableEscape,
  EnableFlashBuyout,
  Register,
  RejectProposal,
  WithdrawProposal,
} from '../../generated/Broker/Broker';
import { BuyoutProposal, Sale, sERC20 } from '../../generated/schema';

export function handleRegister(event: Register): void {
  let id = event.params.sERC20.toHexString();
  let sale = new Sale(id);

  sale.sERC20 = id;
  sale.state = 'Pending';
  sale.guardian = event.params.guardian;
  sale.reserve = event.params.reserve;
  sale.multiplier = event.params.multiplier;
  sale.opening = event.params.opening;
  sale.stock = BigInt.fromI32(0);
  sale.nbOfProposals = BigInt.fromI32(0);
  sale.flash = false;
  sale.escape = false;
  sale.save();

  let _sERC20 = sERC20.load(id)!;
  _sERC20.sale = id;
  _sERC20.save();
}

export function handleDisableEscape(event: DisableEscape): void {
  let id = event.params.sERC20.toHexString();
  let sale = Sale.load(id)!;

  sale.escape = false;
  sale.save();
}

export function handleEnableEscape(event: EnableEscape): void {
  let id = event.params.sERC20.toHexString();
  let sale = Sale.load(id)!;

  sale.escape = true;
  sale.save();
}

export function handleEnableFlashBuyout(event: EnableFlashBuyout): void {
  let id = event.params.sERC20.toHexString();
  let sale = Sale.load(id)!;

  sale.flash = true;
  sale.save();
}

export function handleBuyout(event: Buyout): void {}

export function handleClaim(event: Claim): void {}

export function handleCreateProposal(event: CreateProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = new BuyoutProposal(id);
  proposal.sale = event.params.sERC20.toHexString();
  proposal.state = 'Pending';
  proposal.timestamp = event.block.timestamp;
  proposal.buyer = event.params.buyer;
  proposal.value = event.params.value;
  proposal.collateral = event.params.collateral;
  proposal.expiration = event.params.expiration;

  proposal.save();
}

export function handleAcceptProposal(event: AcceptProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = BuyoutProposal.load(id)!;
  proposal.state = 'Accepted';

  proposal.save();
}

export function handleRejectProposal(event: RejectProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = BuyoutProposal.load(id)!;
  proposal.state = 'Rejected';

  proposal.save();
}

export function handleWithdrawProposal(event: WithdrawProposal): void {
  let id = event.params.sERC20.toHexString() + '#' + event.params.proposalId.toString();

  let proposal = BuyoutProposal.load(id)!;
  proposal.state = 'Withdrawn';

  proposal.save();
}
