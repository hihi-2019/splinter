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
      req.body.group_members.map(member => {
        if(member.groupMember_id == transaction.groupMember_id){
          let payer = {
            transaction_id: id,
            groupMember_id: member.groupMember_id,
            total_contribution: transaction.transaction_total * 100
          }
          return db.addTransactionDetails(payer)
        } else{
          let payee = {
            transaction_id: id,
            groupMember_id: member.groupMember_id,
            total_contribution: ((transaction.transaction_total * 100) / req.body.group_members.length) * -1
          }
          return db.addTransactionDetails(payee)
        }
        
      })

      
    })
    .then(() => {
      res.send(200)
    })
})

router.delete('/:id', (req, res) => {
  db.deleteTransactions(req.params.id)
  db.deleteTransactionDetails(req.params.id).then(() => {
    res.send(200)
  })
})

module.exports = router

