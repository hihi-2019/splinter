const router = require('express').Router()
const db = require('../db/transactions')

router.post('/', (req, res) => {
  let t = req.body.transaction
  let transaction = {
    group_id: t.group_id,
    groupMember_id: t.groupMemberId,
    transaction_total: t.transactionTotal,
    transaction_name: t.transactionName,
    date: Date.now()
  }

  db.addTransaction(transaction)
    .then(id => {
      let groupMembers = req.body.group_members.map(member => {
        return {
          transaction_id: id,
          groupMember_id: member.groupMember_id,
          total_contribution: 2000
        }
      })

      return db.addTransactionDetails(groupMembers) 
    })
    .then(() => {
      res.send(200)
    })
})

module.exports = router

