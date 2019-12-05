
const connection = require('./connection')

function getGroupsByUserId(id, db = connection){
  return db('groups').where('user_id', id)

}

module.exports = {
  getGroupsByUserId
}