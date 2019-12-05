const database = require('./connection')

function addTransaction (transactionData, db = database) {

  return db('transaction')
    .insert({
          group_id: transactionData.group_id,
          groupMember_id: transactionData.groupMember_id,
          transaction_total: transactionData.transaction_total,
          transaction_name: transactionData.transaction_name,
          date: transactionData.date
        })
}



module.exports = {
  addTransaction
}