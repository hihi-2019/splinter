
const connection = require('./connection')

function getGroupsByUserId(id, db = connection) {
  return db('groups').where('user_id', id)
}

function createNewGroup(groupDetails, db = connection) {
  return db('groups').insert(groupDetails)
}

function getMembersByGroupId(groupId, db = connection) {
  return db('groupMembers').where('group_id', groupId)
}

function createNewMember(memberDetails, db = connection){
  console.log(memberDetails)
  return db('groupMembers').insert(memberDetails)

}

module.exports = {
  getGroupsByUserId,
  createNewGroup,
  getMembersByGroupId,
  createNewMember
}