

const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const database = knex(config[env])

const {generatePasswordHash} = require('../auth/hash')


function createUser (email, first_name, last_name, password,testDb) {
  const db = testDb || database

  return generatePasswordHash(password)
    .then(hash => {
      return db('users').insert({email, first_name, last_name, hash})
    })
}

function getUserByEmail(email, db = database){
  return db('users').where('email', email).first()
}

function userExists (email, testDb) {
  const db = testDb || database

  return db('users')
    .where('email', email)
    .then(users => users.length > 0)
}

module.exports = {
  userExists,
  createUser,
    getUserByEmail
}

