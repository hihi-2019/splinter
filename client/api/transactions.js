
import request from 'superagent'

const url = "/api/transactions"

export function createNewTransaction(transactionData){
  return request
  .post(url)
  .then (res => res.body)
}

export function ApiGetTransactions(groupId){
  return request
  .get(url + '/' + groupId)
}

