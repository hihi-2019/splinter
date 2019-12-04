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
            total_contribution: 0,
          },
          {
            transactionDetails_id: 14,
            transaction_id: 4,
            groupMember_id: 2,
            total_contribution: -20000,
          },
          {
            transactionDetails_id: 15,
            transaction_id: 4,
            groupMember_id: 3,
            total_contribution: -20000,
          },
          {
            transactionDetails_id: 16,
            transaction_id: 4,
            groupMember_id: 4,
            total_contribution: 40000,
          },
        ])
      })
  }

  