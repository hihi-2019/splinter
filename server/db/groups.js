
const connection = require('./connection')

function getGroupsByUserId(id, db = connection) {
  return db('groups').where('user_id', id)
}

function createNewGroup(groupDetails, db = connection) {
  return db('groups').insert(groupDetails, "id")
}

function getMembersByGroupId(groupId, db = connection) {
  return db('groupMembers').where('group_id', groupId)
}

function createNewMember(memberDetails, db = connection) {
  return db('groupMembers').insert(memberDetails, "id")
}

function deleteGroup(groupId, db = connection){
  return db('groups').where('group_id', groupId).del()
}

function deleteMembers(groupId, db = connection){
  return db('groupMembers').where('group_id', groupId).del()
  
}

function settleGroup(groupId, db = connection){
  return db('groups').where('group_id', groupId).update({settled:true})
  .then(res=>res)
}

module.exports = {
  getGroupsByUserId,
  createNewGroup,
  getMembersByGroupId,
  createNewMember,
  deleteGroup,
  deleteMembers,
  settleGroup
}