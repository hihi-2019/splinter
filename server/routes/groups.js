const router = require('express').Router()

const db = require('../db/groups')

router.get('/:id', (req,res) => {
  db.getGroupsByUserId(req.params.id)
  .then(data => 
  res.json(data)
)})

module.exports = router