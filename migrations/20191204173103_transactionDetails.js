
exports.up = function(knex) {
    return knex.schema.createTable('transactionDetails', table => {
      table.increments('transactionDetails_id')
      table.integer('transaction_id')
      table.integer('groupMember_id')
      table.integer('total_contribution')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('transactionDetails')
  };