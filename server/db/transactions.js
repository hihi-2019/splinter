const database = require('./connection')

function getTransactions(groupId, db = database) {
  return db('transactions').where('group_id', groupId)
  .join('transactionDetails', 'transactions.transaction_id', 'transactionDetails.transaction_id')
  .select()
}


function addTransaction(transaction, db = database) {
  return db('transactions')
    .insert(transaction, "transaction_id")
    .then(tid => tid[0])
}

function addTransactionDetails(details, db = database) {
  return db('transactionDetails')
    .insert(details, "transactionDetails_id").then(res => {})
}

function deleteTransactions(id, db=database){
  return db('transactions').where('transaction_id', id).delete()
}

function deleteTransactionDetails(id, db=database){
  return db('transactionDetails').where('transaction_id', id).delete()
}

function getTransactionTotal(groupId, db = database){
  return db('transactions').where('group_id', groupId).select('transaction_total')
}

module.exports = {
  addTransaction,
  getTransactions,
  addTransactionDetails,
  deleteTransactions,
  deleteTransactionDetails,
  getTransactionTotal
}