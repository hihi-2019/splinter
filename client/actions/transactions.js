import { createNewTransaction } from '../api/transactions'

export function createNewTransaction(transactionData) {
  return {
    type: 'CREATE_NEW_TRANSACTION',
    transactionData
  }
}