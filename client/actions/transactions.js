import { createNewTransaction } from '../api/transactions'

export function newTransaction(transactionData) {
  return (dispatch) => {
    type: 'CREATE_NEW_TRANSACTION',
    transactionData
  }
}