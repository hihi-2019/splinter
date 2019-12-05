exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('groups').del()
    .then(function () {
      // Inserts seed entries
      return knex('groups').insert([
        {
          group_id: 1,
          group_name: 'Auckland Trip',
          group_description: 'Family trip away to Auckland for Cousin Jennys Wedding',
          user_id: 1,
          settled: false
        },
        {
            group_id: 2,
            group_name: 'Brunch Club',
            group_description: 'Weekly ladies brunch club in Whitby',
            user_id: 1,
            settled: true
        },
        {
            group_id: 3,
            group_name: 'Coachella 2019',
            group_description: 'Party trip with the old gang to California',
            user_id: 4,
            settled: false
        },
        {
            group_id: 4,
            group_name: 'Queenstown Ski Trip',
            group_description: 'Winterfest 2019 trip with all my old school friends',
            user_id: 2,
            settled: false
        },
        {
            group_id: 5,
            group_name: 'Groceries',
            group_description: 'Monthly expenses in Windy Wellington',
            user_id: 3,
            settled: false
        }
      ])
    })
}