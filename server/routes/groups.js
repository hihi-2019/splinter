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
  .then(groupId => {
    let newMember = {
      group_id: groupId[0],
      member_name: req.body.member_name
    }
    db.createNewMember(newMember)
    .then(memberId => {
      console.log(memberId)
    })
    res.sendStatus(200)  
  })

})

router.get('/members/:id', (req,res) => {
  db.getMembersByGroupId(req.params.id)
  .then(data => 
    res.json(data))
})

module.exports = router