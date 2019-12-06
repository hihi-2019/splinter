import { createNewTransaction } from '../api/transactions'

export function newTransaction(transactionData) {
  return dispatch => {
    createNewTransaction(transactionData)
      .then(() => {

      })
  }
}

// export function newTransaction(transactionData) {
//   console.log(transactionData)
//   return (dispatch) => {
//     type: 'CREATE_NEW_TRANSACTION',
//     transactionData
//   }
// }