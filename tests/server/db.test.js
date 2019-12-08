const config = require('../../knexfile').test
const database = require('knex')(config)

const db = require('../../server/db')

berforeAll(()=> {
  return database.migrate.latest()
  .then(()=> {
    return database.seed.run()
  })
})

test('it works', () => {
  expect(7).toBeLessThan(8)
})