const database = require('./connection')
const db = testDb || database

function getTransaction(groupId, transactionId) {
  db('transactio')

function addTransaction(transaction, db = database) {
  return db('transactions')
    .insert(transaction.new_transaction)
    .then(tid => {
      transaction.transaction_details.transaction_id = tid[0]
      return db('transactionDetails')
        .insert(transaction.transaction_details)
    })
}


module.exports = {
  addTransaction
}