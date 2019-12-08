const config = require('../../knexfile').test
const database = require('knex')(config)

const db = require('../../server/db/groups')

beforeAll(()=> {
  return database.migrate.latest()
  .then(()=> {
    return database.seed.run()
  })
})

test('it works', () => {
  expect(7).toBeLessThan(8)
})



test('getGroupsByUserId returns the correct number of groups', () => {
  const expected = 5

  return db.getGroupsByUserId(1, database)
      .then(groups => {
          const actual = groups.length

          expect(actual).toEqual(expected)
      })
})

test('createNewGroup creates a new group and returns the id', () => {
  const expected = 1

  let groupDetails = {
    group_name: "TestTrip",
    group_description: "Test",
    user_id: 2,
    settled: 0

  }

  return db.createNewGroup(groupDetails, database)
    .then(group => {
      const actual = group.length

      expect(actual).toEqual(expected)
    })
})


test('getMembersByGroupId returns the correct number of members', () => {
  const expected = 4

  return db.getMembersByGroupId(1, database)
    .then(members => {
      const actual = members.length

      expect(actual).toEqual(expected)
    })
})

test('createNewMember creates a new group and returns the id', () => {
  const expected = 1

  let memberDetails = {
    member_name: 'test',
    group_id: 2
  }

  return db.createNewMember(memberDetails, database)
    .then(member => {
      const actual = member.length

      expect(actual).toEqual(expected)
    })
})


test('deleteGroup deletes the group and returns id of deleted group', () => {
  const expected = 1

  return db.deleteGroup(3, database)
    .then(group => {
      const actual = group.length

      expect(actual).toEqual(expected)
    })
})

test('deleteMembers deletes the member and returns id of deleted member', () => {
  const expected = 1

  return db.deleteMembers(10, database)
    .then(member => {
      const actual = member.length
      
      expect(actual).toEqual(expected)
    })
})