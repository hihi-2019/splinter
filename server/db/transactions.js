const database = require('./connection')

function getTransactions(groupId, db = database) {
  return db('transactions').where('group_id', groupId)
  .join('transactionDetails', 'transactions.transaction_id', 'transactionDetails.transaction_id')
  .select()
}


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
<<<<<<< HEAD
  getTransactions
=======
  addTransactionDetails
>>>>>>> da959b07074802b8d59f307997f24a59c5abab6b
}