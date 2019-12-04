
exports.up = function(knex) {
    return knex.schema.createTable('groupMembers', table => {
      table.increments('groupMember_id')
      table.string('member_name')
      table.integer('group_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('groupMembers')
  };