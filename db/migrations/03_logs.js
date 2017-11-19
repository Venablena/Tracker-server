
exports.up = function(knex, Promise) {
  return knex.schema.createTable('logs', table => {
    table.increments().notNullable()
    // table.string('date').notNullable()
    // table.string('time').notNullable()
    table.string('dateTime').notNullable()
    //table.time('time').notNullable()
    table.double('long').notNullable()
    table.double('lat').notNullable()
    table.integer('location_id')
    table.foreign('location_id').references('locations')
    table.string('tag')
    table.foreign('tag').references('tags')
    table.string('description').notNullable().defaultTo('')
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('logs')
};
