const router = require('express').Router()

const db = require('../db/groups')

router.get('/:id', (req,res) => {
  db.getGroupsByUserId(req.params.id)
  .then(data => 
  res.json(data)
)})

router.post('/', (req,res) => {
  let newGroup = {
    user_id: req.body.user_id,
    group_name: req.body.group_name,
    group_description: req.body.group_description,
    settled: req.body.settled
  }
  db.createNewGroup(newGroup)
})

router.get('/members/:id', (req,res) => {
  db.getMembersByGroupId(req.params.id)
  .then(data => 
    res.json(data))
})

module.exports = router