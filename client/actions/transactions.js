import { createNewTransaction, ApiGetTransactions, ApiDeleteTransactions, ApiTransactionTotal } from '../api/transactions'

export function newTransaction(transactionData) {
  return dispatch => {
    createNewTransaction(transactionData)
      .then(() => {
        dispatch(getTransactions(transactionData.transaction.group_id))
        dispatch(getTransactionTotal(transactionData.transaction.group_id))
      })
  }
}

export function saveTransactions(transactions) {
  return {
    type: 'GET_TRANSACTIONS',
    transactions
  }
}

export function getTransactions(group_id) {
  return dispatch => {
    ApiGetTransactions(group_id)
      .then(transactions => {
        dispatch(saveTransactions(transactions.body))
      })
  }
}

export function deleteTransactions(id, groupId) {
  return dispatch => {
    ApiDeleteTransactions(id)
      .then(() => {
        dispatch(getTransactions(groupId))
      })
  }
}

export function getTransactionTotal(group_id) {
  return dispatch => {
    ApiTransactionTotal(group_id)
    .then((total) => {
      dispatch(saveTransactionTotal(total))
    })
  }
}

export function saveTransactionTotal(total) {
  return {
    type: 'SAVE_TRANSACTION_TOTAL',
    total
  }
}