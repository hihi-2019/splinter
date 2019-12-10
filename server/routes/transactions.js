const router = require('express').Router()
const db = require('../db/transactions')

router.get('/:id', (req, res) => {
  db.getTransactions(req.params.id)
    .then(transactions => {
      res.json(transactions)
    })
})

router.get('/total/:id', (req, res) => {
  db.getTransactionTotal(req.params.id)
    .then(totals => {
      let initialValue = 0
      let sum = totals.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.transaction_total
      }, initialValue)
      // res.send(sum)
      res.json({ totalSpent: sum })
    })
})


router.post('/', (req, res) => {
  let t = req.body.transaction
  console.log(req.body)
  let transaction = {
    group_id: t.group_id,
    groupMember_id: t.groupMemberId,
    transaction_total: t.transactionTotal * 100,
    transaction_name: t.transactionName,
    date: Math.floor(Date.now() / 1000)
  }

  db.addTransaction(transaction)
    .then(id => {
      req.body.group_members.map(member => {
        if(member.groupMember_id == transaction.groupMember_id){
          let num = req.body.group_members.length
          let multiplyer = (100 / num) / 100
          let payerSubtraction = transaction.transaction_total * multiplyer
          let payer = {
            transaction_id: id,
            groupMember_id: member.groupMember_id,
            total_contribution: (transaction.transaction_total - payerSubtraction) 
          }
          return db.addTransactionDetails(payer)
        } else {
          let payee = {
            transaction_id: id,
            groupMember_id: member.groupMember_id,
            total_contribution: ((transaction.transaction_total) / req.body.group_members.length) * -1
          }
          return db.addTransactionDetails(payee)
        }
      })
    })
    .then(() => {
      res.send(200)
    })
    .catch((err) => {
      console.log(err)
      res.send(500)
    })
})

router.delete('/:id', (req, res) => {
  db.deleteTransactions(req.params.id).then(() => {
    db.deleteTransactionDetails(req.params.id).then(() => {
      res.send(200)
    })
  })
})



module.exports = router

