exports.up = function(knex) {
    return knex.schema.createTable('userGroup', table => {
      table.integer('user_id')
      table.integer('group_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('userGroup')
  };