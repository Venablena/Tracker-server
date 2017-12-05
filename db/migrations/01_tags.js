
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tags', table =>{
    // What happened to `.increments()` and `.timestamps()`?  :(
    table.string('hold').notNullable().defaultTo('negative')
    table.string('click').notNullable().defaultTo('neutral')
    table.string('double_click').notNullable().defaultTo('positive')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tags')
};
