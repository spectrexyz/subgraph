import { BigInt } from '@graphprotocol/graph-ts';
import {
  Broker,
  AcceptProposal,
  Buyout,
  Claim,
  CreateProposal,
  DisableEscape,
  EnableEscape,
  EnableFlashBuyout,
  Escape,
  Register,
  RejectProposal,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SetBank,
  SetProtocolFee,
  WithdrawProposal,
} from '../../generated/Broker/Broker';
import { Sale, NFT, Spectre, sERC20 } from '../../generated/schema';

export function handleAcceptProposal(event: AcceptProposal): void {}

export function handleBuyout(event: Buyout): void {}

export function handleClaim(event: Claim): void {}

export function handleCreateProposal(event: CreateProposal): void {}

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

export function handleEscape(event: Escape): void {}

export function handleRegister(event: Register): void {
  let id = event.params.sERC20.toHexString();
  let sale = Sale.load(id);

  if (!sale) {
    let serc20 = sERC20.load(id)!;

    sale = new Sale(id);
    sale.spectre = serc20.spectre;
    sale.state = 'Pending';
    sale.guardian = event.params.guardian;
    sale.reserve = event.params.reserve;
    sale.multiplier = event.params.multiplier;
    sale.opening = event.params.opening;
    sale.stock = BigInt.fromI32(0);
    sale.nbOfProposals = BigInt.fromI32(0);
    sale.save();

    let spectre = Spectre.load(serc20.spectre)!;
    spectre.sale = id;
    spectre.save();
  }
}

export function handleRejectProposal(event: RejectProposal): void {}

export function handleRoleAdminChanged(event: RoleAdminChanged): void {}

export function handleRoleGranted(event: RoleGranted): void {}

export function handleRoleRevoked(event: RoleRevoked): void {}

export function handleSetBank(event: SetBank): void {}

export function handleSetProtocolFee(event: SetProtocolFee): void {}

export function handleWithdrawProposal(event: WithdrawProposal): void {}
