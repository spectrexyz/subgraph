import { Address, BigInt } from '@graphprotocol/graph-ts';
import { Vault, ApprovalForAll, Escape, Fractionalize, Unlock } from '../../generated/Vault/Vault';
import { sERC20 as sERC20Contract } from '../../generated/sERC20/sERC20';
import { NFT, Spectre, sERC20 } from '../../generated/schema';

// Note: If a handler doesn't require existing field values, it is faster
// _not_ to load the entity from the store. Instead, create it fresh with
// `new Entity(...)`, set the fields that should be updated and save the
// entity back to the store. Fields that were not set or unset remain
// unchanged, allowing for partial updates to be applied.

export function handleEscape(event: Escape): void {}

export function handleFractionalize(event: Fractionalize): void {
  let NFTId = event.params.collection.toHexString() + '#' + event.params.tokenId.toString();
  let sERC20Id = event.params.sERC20.toHexString();
  let spectreId = event.params.id.toString();
  let _NFT = NFT.load(NFTId);

  if (!_NFT) {
    _NFT = new NFT(NFTId);
    _NFT.collection = event.params.collection;
    _NFT.tokenId = event.params.tokenId;
    _NFT.save();
  }

  let _sERC20 = new sERC20(sERC20Id);
  let contract = sERC20Contract.bind(event.params.sERC20);
  _sERC20.name = contract.name();
  _sERC20.symbol = contract.symbol();
  _sERC20.cap = contract.cap();
  _sERC20.spectre = spectreId;
  _sERC20.save();

  let _spectre = new Spectre(spectreId);
  _spectre.NFT = NFTId;
  _spectre.sERC20 = sERC20Id;
  _spectre.state = 'Locked';
  _spectre.vault = event.address;
  _spectre.broker = event.params.broker;
  _spectre.save();
}

export function handleUnlock(event: Unlock): void {
  let spectre = Spectre.load(event.params.id.toString())!;

  spectre.state = 'Unlocked';
  spectre.save();
}
