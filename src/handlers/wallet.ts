import { Address } from '@graphprotocol/graph-ts'
import { Account } from '../entities/schema'

export function createAccount(id: Address): void {
  let account = Account.load(id.toHex())

  if (account == null) {
    account = new Account(id.toHex())
    account.address = id
    account.nfts = []
  }

  account.save()
}
