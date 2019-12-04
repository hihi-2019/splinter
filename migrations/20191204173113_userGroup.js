exports.up = function(knex) {
    return knex.schema.createTable('transactionDetails', table => {
      table.integer('user_id')
      table.integer('group_id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transactionDetails')
  };