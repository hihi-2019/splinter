import request from 'superagent'

const url = "/api/transactions"

export function createNewTransaction(transactionData){

  return request
  .post(url).send(transactionData)
  .then (res => res.body)
}
