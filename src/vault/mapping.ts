import { Address, BigInt, log } from '@graphprotocol/graph-ts';
import {
  Vault,
  ApprovalForAll,
  Escape,
  Fractionalize,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TransferBatch,
  TransferSingle,
  URI,
  Unlock,
} from '../../generated/Vault/Vault';

import { sERC20 as sERC20Contract } from '../../generated/sERC20/sERC20';
import { NFT, Spectre, sERC20 } from '../../generated/schema';

export function handleApprovalForAll(event: ApprovalForAll): void {
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
  // - contract.DEFAULT_ADMIN_ROLE(...)
  // - contract.DERRIDA(...)
  // - contract.balanceOf(...)
  // - contract.balanceOfBatch(...)
  // - contract.fractionalize(...)
  // - contract.getRoleAdmin(...)
  // - contract.getRoleMember(...)
  // - contract.getRoleMemberCount(...)
  // - contract.hasRole(...)
  // - contract.isApprovedForAll(...)
  // - contract.isLocked(...)
  // - contract.onERC721Received(...)
  // - contract.sERC20Base(...)
  // - contract.sERC20Of(...)
  // - contract.spectreOf(...)
  // - contract.spectreOf(...)
  // - contract.supportsInterface(...)
  // - contract.tokenTypeOf(...)
  // - contract.unavailableURI(...)
  // - contract.unlockedURI(...)
  // - contract.uri(...)
}

export function handleEscape(event: Escape): void {}

export function handleFractionalize(event: Fractionalize): void {
  let NFTId = event.params.collection.toHexString() + '#' + event.params.tokenId.toString();
  let sERC20Id = event.params.sERC20.toHexString();
  let spectreId = event.params.id.toString();
  let nft = NFT.load(NFTId);

  if (!nft) {
    nft = new NFT(NFTId);
    nft.collection = event.params.collection;
    nft.tokenId = event.params.tokenId;
    nft.save();
  }

  let serc20 = new sERC20(sERC20Id);
  let contract = sERC20Contract.bind(event.params.sERC20);
  serc20.name = contract.name();
  serc20.symbol = contract.symbol();
  serc20.cap = contract.cap();
  serc20.spectre = spectreId;
  serc20.save();

  let spectre = new Spectre(spectreId);
  spectre.NFT = NFTId;
  spectre.sERC20 = sERC20Id;
  spectre.state = 'Locked';
  spectre.vault = event.address;
  spectre.broker = event.params.broker;
  spectre.save();
}

export function handleTransferBatch(event: TransferBatch): void {}

export function handleTransferSingle(event: TransferSingle): void {}

export function handleURI(event: URI): void {}

export function handleUnlock(event: Unlock): void {
  let spectre = Spectre.load(event.params.id.toString())!;

  spectre.state = 'Unlocked';
  spectre.save();
}
