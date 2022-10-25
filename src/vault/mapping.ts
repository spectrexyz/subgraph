import { Address, BigInt } from '@graphprotocol/graph-ts';
import {
  NFT,
  sERC20,
  sERC20Holder,
  Spectre,
  SpectresCounter,
} from '../../generated/schema';
import { sERC20 as sERC20Contract } from '../../generated/sERC20/sERC20';
import { sERC721 as sERC721Contract } from '../../generated/Vault/sERC721';
import {
  Fractionalize,
  TransferBatch,
  TransferSingle,
  Unlock,
} from '../../generated/Vault/Vault';

let nullAddress = Address.fromString(
  '0x0000000000000000000000000000000000000000',
);

export function handleTransferSingle(event: TransferSingle): void {
  let sERC20Address = event.params.operator;
  let from = event.params.from;
  let to = event.params.to;
  let value = event.params.value;

  // Subtract the amount from the holdder unless it is the null address
  if (from != nullAddress) {
    let fromId = sERC20Address.toHexString() + '#'
      + from.toHexString();
    let fromHolder = sERC20Holder.load(fromId);
    if (!fromHolder) throw new Error('Can’t load holder with ID ' + fromId);
    fromHolder.amount = fromHolder.amount.minus(value);
    fromHolder.save();
  }

  let toId = sERC20Address.toHexString() + '#'
    + to.toHexString();
  let toHolder = sERC20Holder.load(toId);
  if (toHolder) {
    toHolder.amount = toHolder.amount.plus(value);
  } else {
    toHolder = new sERC20Holder(toId);
    toHolder.address = to;
    toHolder.amount = value;
    toHolder.sERC20 = sERC20Address.toHexString();
  }

  toHolder.save();
}

export function handleTransferBatch(_event: TransferBatch): void {
  // TODO
}

export function handleFractionalize(event: Fractionalize): void {
  let nftId = event.params.collection.toHexString() + '#'
    + event.params.tokenId.toString();

  let sERC20Address = event.params.sERC20;
  let spectreId = event.params.id.toString();
  let nft = NFT.load(nftId);

  let counter = SpectresCounter.load('SpectresCounter');
  if (!counter) {
    counter = new SpectresCounter('SpectresCounter');
    counter.count = 0;
    counter.save();
  }

  if (!nft) {
    nft = new NFT(nftId);

    nft.collection = event.params.collection;
    nft.tokenId = event.params.tokenId;

    let contract = sERC721Contract.bind(event.params.collection);
    nft.tokenURI = contract.tokenURI(event.params.tokenId);
    nft.creator = event.address;

    nft.save();
  }

  let _sERC20 = new sERC20(sERC20Address.toHexString());
  let contract = sERC20Contract.bind(event.params.sERC20);
  _sERC20.spectre = spectreId;
  _sERC20.name = contract.name();
  _sERC20.symbol = contract.symbol();
  _sERC20.cap = contract.cap();
  _sERC20.address = sERC20Address;
  _sERC20.minted = BigInt.fromI32(0);
  _sERC20.save();

  let spectre = new Spectre(spectreId);
  spectre.NFT = nftId;
  spectre.sERC20 = sERC20Address.toHexString();
  spectre.state = 'Locked';
  spectre.vault = event.address;
  spectre.broker = event.params.broker;

  spectre.timestamp = event.block.timestamp;

  // keep track of the total
  counter.count = counter.count + 1;

  counter.save();
  spectre.save();
}

export function handleUnlock(event: Unlock): void {
  let spectre = Spectre.load(event.params.id.toString())!;

  spectre.state = 'Unlocked';
  spectre.save();
}
