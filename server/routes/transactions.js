const router = require('express').Router()
const db = require('../db/transactions')

router.get('/:id', (req, res) => {
  db.getTransactions(req.params.id)
  .then(transactions => {
    res.json(transactions)
  })
})

module.exports = router
router.post('/', (req, res) => {
  let transaction = {
    new_transaction: {
      group_id: req.body.group_id,
      groupMember_id: req.body.groupMemberId,
      transaction_total: req.body.transactionTotal,
      transaction_name: req.body.transactionName,
      date: Date.now()
    },
    transaction_details: {
      groupMember_id: req.body.membersOwing,
      total_contribution: req.body.amountMembersOwing
    }
  }
  db.addTransaction(transaction).then(data => {
    res.send(200)
  })
})

module.exports = router

