const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const database = require('knex')(config)


function getUserByEmail(email, db = database){
  return db('users').where('email', email).first()
}


module.exports = {
  getUserByEmail
}

