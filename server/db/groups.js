
const connection = require('./connection')

function getGroupsByUserId(id, db = connection){
  return db('groups').where('user_id', id)

}

function getMembersByGroupId(groupId, db = connection) {
  return db('groupMembers').where('group_id', groupId)
}

module.exports = {
  getGroupsByUserId,
  getMembersByGroupId
}