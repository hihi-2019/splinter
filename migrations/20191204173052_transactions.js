
exports.up = function(knex) {
    return knex.schema.createTable('transactions', table => {
      table.increments('transaction_id')
      table.integer('group_id')
      table.integer('groupMember_id')
      table.integer('transaction_total')
      table.string('transaction_name')
      table.bigint('date')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transactions')
  };