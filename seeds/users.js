const { hashSync } = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          user_id: 1,
          email: 'alice.alsford@gmail.com',
          first_name: 'Alice',
          last_name: 'Alsford',
          hash: hashSync('123', saltRounds),
        },
        {
          user_id: 2,
          email: 'toscaiscool@hotmail.com',
          first_name: 'Tosca',
          last_name: 'Wilson',
          hash: hashSync('123', saltRounds),
        },
        {
          user_id: 3,
          email: 'robiscool@aliexpress.com',
          first_name: 'Rob',
          last_name: 'Cummins',
          hash: hashSync('123', saltRounds),
        },
        {
          user_id: 4,
          email: 'basiscool@msn.com',
          first_name: 'Bas',
          last_name: 'Suckling',
          hash: hashSync('123', saltRounds),
        }
      ])
    })
}