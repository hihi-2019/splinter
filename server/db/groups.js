
const connection = require('./connection')

function getGroupsByUserId(id, db = connection) {
  return db('groups').where('user_id', id)
}

function createNewGroup(groupDetails, db = connection) {
  return db('groups').insert(groupDetails)
}

module.exports = {
  getGroupsByUserId,
  createNewGroup
}