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
            total_contribution: -25000,
          },
          {
            transactionDetails_id: 2,
            transaction_id: 1,
            groupMember_id: 2,
            total_contribution: -25000,
          },
          {
            transactionDetails_id: 3,
            transaction_id: 1,
            groupMember_id: 3,
            total_contribution: 100000,
          },
          {
            transactionDetails_id: 4,
            transaction_id: 1,
            groupMember_id: 4,
            total_contribution: -25000,
          },
          {
            transactionDetails_id: 5,
            transaction_id: 2,
            groupMember_id: 1,
            total_contribution: -12500,
          },
          {
            transactionDetails_id: 6,
            transaction_id: 2,
            groupMember_id: 2,
            total_contribution: 50000,
          },
          {
            transactionDetails_id: 7,
            transaction_id: 2,
            groupMember_id: 3,
            total_contribution: -12500,
          },
          {
            transactionDetails_id: 8,
            transaction_id: 2,
            groupMember_id: 4,
            total_contribution: -12500,
          },
          {
            transactionDetails_id: 9,
            transaction_id: 3,
            groupMember_id: 1,
            total_contribution: 10000,
          },
          {
            transactionDetails_id: 10,
            transaction_id: 3,
            groupMember_id: 2,
            total_contribution: -2500,
          },
          {
            transactionDetails_id: 11,
            transaction_id: 3,
            groupMember_id: 3,
            total_contribution: -2500,
          },
          {
            transactionDetails_id: 12,
            transaction_id: 3,
            groupMember_id: 4,
            total_contribution: -2500,
          },
          {
            transactionDetails_id: 13,
            transaction_id: 4,
            groupMember_id: 1,
            total_contribution: -10000,
          },
          {
            transactionDetails_id: 14,
            transaction_id: 4,
            groupMember_id: 2,
            total_contribution: -10000,
          },
          {
            transactionDetails_id: 15,
            transaction_id: 4,
            groupMember_id: 3,
            total_contribution: -10000,
          },
          {
            transactionDetails_id: 16,
            transaction_id: 4,
            groupMember_id: 4,
            total_contribution: 40000,
          },
          {
            transactionDetails_id: 17,
            transaction_id: 5,
            groupMember_id: 5,
            total_contribution: 9900,
          },
          {
            transactionDetails_id: 18,
            transaction_id: 5,
            groupMember_id: 6,
            total_contribution: -3300,
          },
          {
            transactionDetails_id: 19,
            transaction_id: 5,
            groupMember_id: 7,
            total_contribution: -3300,
          },
          {
            transactionDetails_id: 20,
            transaction_id: 6,
            groupMember_id: 5,
            total_contribution: 9000,
          },
          {
            transactionDetails_id: 21,
            transaction_id: 6,
            groupMember_id: 6,
            total_contribution: -3000,
          },
          {
            transactionDetails_id: 22,
            transaction_id: 6,
            groupMember_id: 7,
            total_contribution: -3000,
          },
          {
            transactionDetails_id: 23,
            transaction_id: 7,
            groupMember_id: 5,
            total_contribution: -4000,
          },
          {
            transactionDetails_id: 24,
            transaction_id: 7,
            groupMember_id: 6,
            total_contribution: 12000,
          },
          {
            transactionDetails_id: 25,
            transaction_id: 7,
            groupMember_id: 7,
            total_contribution: -4000,
          },
          {
            transactionDetails_id: 26,
            transaction_id: 8,
            groupMember_id: 5,
            total_contribution: -3000,
          },
          {
            transactionDetails_id: 27,
            transaction_id: 8,
            groupMember_id: 6,
            total_contribution: 9000,
          },
          {
            transactionDetails_id: 28,
            transaction_id: 8,
            groupMember_id: 7,
            total_contribution: -3000,
          },
          {
            transactionDetails_id: 29,
            transaction_id: 9,
            groupMember_id: 5,
            total_contribution: -5000,
          },
          {
            transactionDetails_id: 30,
            transaction_id: 9,
            groupMember_id: 6,
            total_contribution: -5000,
          },
          {
            transactionDetails_id: 31,
            transaction_id: 9,
            groupMember_id: 7,
            total_contribution: 15000,
          },
        ])
      })
  }

  