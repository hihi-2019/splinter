const router = require('express').Router()

const db = require('../db/groups')

router.get('/:id', (req, res) => {
  db.getGroupsByUserId(req.params.id)
    .then(data =>
      res.json(data)
    )
})

router.post('/', (req, res) => {
  let newGroup = {
    user_id: req.body.user_id,
    group_name: req.body.group_name,
    group_description: req.body.group_description,
    settled: req.body.settled
  }
  let newGroupId
  db.createNewGroup(newGroup)
    .then(groupId => {
      newGroupId = groupId
      return Promise.all(req.body.members_names.map(member => {
        return db.createNewMember({ group_id: groupId[0], member_name: member })
      }))
    }).then(() => {
      res.json(newGroupId)
    })

})

router.get('/members/:id', (req, res) => {
  db.getMembersByGroupId(req.params.id)
    .then(data =>
      res.json(data))
})

router.delete('/members/:id', (req, res) => {
  db.deleteMembers(req.params.id)
    .then(data => res.sendStatus(200))
})

router.delete('/:id', (req, res) => {
  db.deleteGroup(req.params.id)
    .then(db.deleteMembers(req.params.id))
    .then
      (data =>
        res.sendStatus(200))
})

router.put('/:id', (req,res) => {
  db.settleGroup(req.params.id)
  .then(data => res.sendStatus(200))
})

module.exports = router