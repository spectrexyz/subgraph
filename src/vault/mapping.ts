import { NFT, sERC20, Spectre } from '../../generated/schema';
import { sERC20 as sERC20Contract } from '../../generated/sERC20/sERC20';
import { sERC721 as sERC721Contract } from '../../generated/Vault/sERC721';
import { Fractionalize, Unlock } from '../../generated/Vault/Vault';

export function handleFractionalize(event: Fractionalize): void {
  let NFTId = event.params.collection.toHexString() + '#'
    + event.params.tokenId.toString();
  let sERC20Id = event.params.sERC20.toHexString();
  let spectreId = event.params.id.toString();
  let _NFT = NFT.load(NFTId);

  if (!_NFT) {
    _NFT = new NFT(NFTId);
    _NFT.collection = event.params.collection;
    _NFT.tokenId = event.params.tokenId;

    let contract = sERC721Contract.bind(event.params.collection);
    _NFT.tokenURI = contract.tokenURI(event.params.tokenId);

    _NFT.save();
  }

  let _sERC20 = new sERC20(sERC20Id);
  let contract = sERC20Contract.bind(event.params.sERC20);
  _sERC20.spectre = spectreId;
  _sERC20.name = contract.name();
  _sERC20.symbol = contract.symbol();
  _sERC20.cap = contract.cap();
  _sERC20.save();

  let spectre = new Spectre(spectreId);
  spectre.NFT = NFTId;
  spectre.sERC20 = sERC20Id;
  spectre.state = 'Locked';
  spectre.vault = event.address;
  spectre.broker = event.params.broker;
  spectre.save();
}

export function handleUnlock(event: Unlock): void {
  let spectre = Spectre.load(event.params.id.toString())!;

  spectre.state = 'Unlocked';
  spectre.save();
}
