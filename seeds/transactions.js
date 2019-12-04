exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          transaction_id: 1,
          group_id: 1,
          groupMember_id: 3,
          transaction_total: 100000,
          transaction_name: 'Flights',
          date: "1575436546"
        },
        {
            transaction_id: 2,
            group_id: 1,
            groupMember_id: 2,
            transaction_total: 50000,
            transaction_name: 'Hotel',
            date: "1575436500"
          },
          {
            transaction_id: 3,
            group_id: 1,
            groupMember_id: 1,
            transaction_total: 10000,
            transaction_name: 'McDonalds Dinner',
            date: "1575436700"
          },
          {
            transaction_id: 4,
            group_id: 1,
            groupMember_id: 4,
            transaction_total: 40000,
            transaction_name: 'Bungy jump off harbour bridge',
            date: "1575436900"
          },
      ])
    })
}