exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('transactions').del()
    .then(function () {
      // Inserts seed entries
      return knex('transactions').insert([
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
            transaction_total: 30000,
            transaction_name: 'Bungy jump off harbour bridge',
            date: "1575436900"
          },
          {
            transaction_id: 5,
            group_id: 2,
            groupMember_id: 5,
            transaction_total: 9900,
            transaction_name: 'Brunch at Olive',
            date: "1575436900"
          },
          {
            transaction_id: 6,
            group_id: 2,
            groupMember_id: 5,
            transaction_total: 9000,
            transaction_name: 'Brunch at Sweet Mothers Kitchen',
            date: "1575436900"
          },
          {
            transaction_id: 7,
            group_id: 2,
            groupMember_id: 6,
            transaction_total: 12000,
            transaction_name: 'Brunch at Floriditas',
            date: "1575436900"
          },
          {
            transaction_id: 8,
            group_id: 2,
            groupMember_id: 6,
            transaction_total: 9000,
            transaction_name: 'Brunch at Midnight Espresso',
            date: "1575436900"
          },
          {
            transaction_id: 9,
            group_id: 2,
            groupMember_id: 7,
            transaction_total: 15000,
            transaction_name: 'Brunch at JJ Murphys',
            date: "1575436900"
          },
          
      ])
    })
}