const router = require('express').Router()
const db = require('../db/transactions')

router.post('/dashboard', (req,res) => {
  db.addTransaction(req.body)
  .then(res => res)
})

module.exports = router