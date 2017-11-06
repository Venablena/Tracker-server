
exports.up = function(knex, Promise) {
  return knex.schema.createTable('events', table =>{
    table.increments().notNullable()
    table.string('name').notNullable().defaultTo('')
    table.string('frequency').notNullable().defaultTo('once')
    table.string('type')
    table.string('date').notNullable()
    table.string('timeStart').notNullable()
    table.string('timeEnd').notNullable()
    table.string('center').notNullable()
    table.text('brief')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
