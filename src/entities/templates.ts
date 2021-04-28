// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { Address, DataSourceTemplate } from "@graphprotocol/graph-ts";

export class PRIVIPodERC721Token extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("PRIVIPodERC721Token", [address.toHex()]);
  }
}

export class PRIVIPodERC1155Token extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("PRIVIPodERC1155Token", [address.toHex()]);
  }
}
