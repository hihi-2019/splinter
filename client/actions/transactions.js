import { createNewTransaction, ApiGetTransactions } from '../api/transactions'

export function newTransaction(transactionData) {
  return dispatch => {
     createNewTransaction(transactionData)
     .then(() => {

     })
  }
}

export function saveTransactions(transactions){
  return {
    type: 'GET_TRANSACTIONS',
    transactions
  }
}

export function getTransactions(group_id){
  return dispatch => {
    ApiGetTransactions(group_id)
    .then(transactions => {
      console.log(transactions.body)
      dispatch(saveTransactions(transactions.body))
    })
  }
}

