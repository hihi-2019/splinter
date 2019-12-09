const config = require('../../../knexfile').test
const database = require('knex')(config)


const db = require('../../../server/db/users')



test('getUserByEmail returns the user email', () => {
  const expected = "alsford"

  return db.getUserByEmail("aliceiscool@yahoo.com")
    .then(user => {
      console.log(user)
      const actual = user.email

      expect(actual).toMatch("aliceiscool@yahoo.com")
    })
})


test('userExists checks to see if the user is already in the db', () => {
  const expected = true

  return db.userExists("aliceiscool@yahoo.com")
    .then(user => {
      console.log(user)
      const actual = user
      expect(actual).toBe(expected)
    })

})