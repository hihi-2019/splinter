exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('groupMembers').del()
      .then(function () {
        // Inserts seed entries
        return knex('groupMembers').insert([
          {
            groupMember_id: 1,
            member_name: 'Phil',
            group_id: 1,
          },
          {
            groupMember_id: 2,
            member_name: 'Freya',
            group_id: 1,
          },
          {
            groupMember_id: 3,
            member_name: 'Hugo',
            group_id: 1,
          },
          {
            groupMember_id: 4,
            member_name: 'Alice',
            group_id: 1,
          },
          {
            groupMember_id: 5,
            member_name: 'Alice',
            group_id: 2,
          },
          {
            groupMember_id: 6,
            member_name: 'Claire',
            group_id: 2,
          },
          {
            groupMember_id: 7,
            member_name: 'Stacey',
            group_id: 2,
          },
          {
            groupMember_id: 8,
            member_name: 'Bas',
            group_id: 3,
          },
          {
            groupMember_id: 9,
            member_name: 'Huw',
            group_id: 3,
          },
          {
            groupMember_id: 10,
            member_name: 'Henry',
            group_id: 3,
          },
          {
            groupMember_id: 11,
            member_name: 'Jonty',
            group_id: 3,
          },
          {
            groupMember_id: 12,
            member_name: 'Tosca',
            group_id: 4,
          },
          {
            groupMember_id: 13,
            member_name: 'Sophie',
            group_id: 4,
          },
          {
            groupMember_id: 14,
            member_name: 'Kate',
            group_id: 4,
          },
          {
            groupMember_id: 15,
            member_name: 'Talia',
            group_id: 4,
          },
          {
            groupMember_id: 16,
            member_name: 'Beth',
            group_id: 5,
          },
          {
            groupMember_id: 17,
            member_name: 'Rob',
            group_id: 5,
          },











          
        ])
      })
  }