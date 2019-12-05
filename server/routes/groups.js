const router = require('express').Router()

const db = require('../db/groups')

router.get('/:id', (req,res) => {
  db.getGroupsByUserId(req.params.id)
  .then(data => 
  res.json(data)
)})

<<<<<<< HEAD
router.post('/', (req,res) => {
  let newGroup = {
    user_id: req.body.user_id,
    group_name: req.body.group_name,
    group_description: req.body.group_description,
    settled: req.body.settled
  }
  db.createNewGroup(newGroup)
=======
router.get('/members/:id', (req,res) => {
  db.getMembersByGroupId(req.params.id)
  .then(data => 
    res.json(data))
>>>>>>> f170fb8cd4c7c3a21b701a39e380cc4cbc0bdf82
})

module.exports = router