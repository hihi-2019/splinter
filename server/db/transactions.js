const database = require('./connection')

function addTransaction(transaction, db = database) {
  return db('transactions')
    .insert(transaction)
    .then(tid => tid[0])
}

function addTransactionDetails(details, db = database) {
  return db('transactionDetails')
    .insert(details)
}

module.exports = {
  addTransaction,
  addTransactionDetails
}