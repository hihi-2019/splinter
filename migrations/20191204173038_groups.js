
exports.up = function(knex) {
    return knex.schema.createTable('groups', table => {
      table.increments('group_id')
      table.string('description')
      table.integer('user_id')
      table.boolean('settled')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('groups')
  };