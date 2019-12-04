const { hashSync } = require('bcrypt')
const saltRounds = 10

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'AliceRulz',
          hash: hashSync('123', saltRounds),
          first_name: 'Alice',
          last_name: 'Alsford',
          hourly_rate: 29000
        },
        {
          id: 2,
          user_name: 'Basm8',
          hash: hashSync('123', saltRounds),
          first_name: 'Bas',
          last_name: 'Suckling',
          hourly_rate: 26000
        },
        {
          id: 3,
          user_name: 'RockclimberGurl89',
          hash: hashSync('123', saltRounds),
          first_name: 'Cass',
          last_name: 'Guinut',
          hourly_rate: 40000
        },
        {
          id: 4,
          user_name: 'TinyDancer',
          hash: hashSync('123', saltRounds),
          first_name: 'Cherise',
          last_name: 'Tan',
          hourly_rate: 70000
        }
      ])
    })
}