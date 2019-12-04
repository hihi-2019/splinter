exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('transactionDetails').del()
      .then(function () {
        // Inserts seed entries
        return knex('transactionDetails').insert([
          {
            transactionDetails_id: 1,
            transaction_id: 1,
            groupMember_id: 1,
            transaction_total: -25000,
          },
          {
            transactionDetails_id: 2,
            transaction_id: 1,
            groupMember_id: 2,
            transaction_total: -25000,
          },
          {
            transactionDetails_id: 3,
            transaction_id: 1,
            groupMember_id: 3,
            transaction_total: 100000,
          },
          {
            transactionDetails_id: 4,
            transaction_id: 1,
            groupMember_id: 4,
            transaction_total: -25000,
          },
          {
            transactionDetails_id: 5,
            transaction_id: 2,
            groupMember_id: 1,
            transaction_total: -12500,
          },
          {
            transactionDetails_id: 6,
            transaction_id: 2,
            groupMember_id: 2,
            transaction_total: 50000,
          },
          {
            transactionDetails_id: 7,
            transaction_id: 2,
            groupMember_id: 3,
            transaction_total: -12500,
          },
          {
            transactionDetails_id: 8,
            transaction_id: 2,
            groupMember_id: 4,
            transaction_total: -12500,
          },
          {
            transactionDetails_id: 9,
            transaction_id: 3,
            groupMember_id: 1,
            transaction_total: 10000,
          },
          {
            transactionDetails_id: 10,
            transaction_id: 3,
            groupMember_id: 2,
            transaction_total: -2500,
          },
          {
            transactionDetails_id: 11,
            transaction_id: 3,
            groupMember_id: 3,
            transaction_total: -2500,
          },
          {
            transactionDetails_id: 12,
            transaction_id: 3,
            groupMember_id: 4,
            transaction_total: -2500,
          },
          {
            transactionDetails_id: 13,
            transaction_id: 4,
            groupMember_id: 1,
            transaction_total: 0,
          },
          {
            transactionDetails_id: 14,
            transaction_id: 4,
            groupMember_id: 2,
            transaction_total: -20000,
          },
          {
            transactionDetails_id: 15,
            transaction_id: 4,
            groupMember_id: 3,
            transaction_total: -20000,
          },
          {
            transactionDetails_id: 16,
            transaction_id: 4,
            groupMember_id: 4,
            transaction_total: 40000,
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