const database = require('./connection')

function getTransactions(groupId, db = database) {
  return db('transactions').where('group_id', groupId)
  .join('transactionDetails', 'transactions.transaction_id', 'transactionDetails.transaction_id')
  .select()
}


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
  addTransaction,
  getTransactions
}