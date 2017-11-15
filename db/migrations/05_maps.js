
exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps', table =>{
    table.increments().notNullable()
    table.string('name').notNullable()
    // table.integer('user_id')
    // table.foreign('user_id').references('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps')
};
