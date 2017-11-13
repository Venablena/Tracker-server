
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', table => {
    table.increments().notNullable()
    table.string('name').notNullable().defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations')
};
