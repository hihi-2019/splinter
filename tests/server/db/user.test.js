const config = require('../../../knexfile').test
const database = require('knex')(config)


const db = require('../../../server/db/users')


test('getUserByEmail finds existing user', () => {
  let expected = 'Alice'

  return db.getUserByEmail('aliceiscool@yahoo.com')
    .then(user => {
      console.log(user)
      let actual = user.first_name

      expect(actual).toEqual(expected)
    })
})



test('userExists finds existing user', () => {
  let expected = true

  return db.userExists('aliceiscool@yahoo.com')
    .then(result => {
      
      let actual = result

      expect(actual).toEqual(expected)
    })
})