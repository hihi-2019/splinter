const router = require('express').Router()
const db = require('../db/transactions')

router.get('/', (req, res) => {
  console.log('hello')
})

module.exports = router