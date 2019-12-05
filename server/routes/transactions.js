const router = require('express').Router()
const db = require('../db/transactions')

<<<<<<< HEAD
router.get('/', (req, res) => {
  console.log('hello')
})

module.exports = router
=======
router.post('/', (req, res) => {
  let transaction = {
    new_transaction: {
      group_id: req.body.group_id,
      groupMember_id: req.body.groupMember_id,
      transaction_total: req.body.transaction_total,
      transaction_name: req.body.transaction_name,
      date: Date.now()
    },
    transaction_details: {
      groupMember_id: req.body.groupMember_id,
      total_contribution: req.body.total_contribution
    }
  }
  db.addTransaction(transaction).then(data => {
    res.send(200)
  })
})

module.exports = router

>>>>>>> 2acf91e930363974de0c192ffc2059949e1b88a0
