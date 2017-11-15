
exports.up = function(knex, Promise) {
  return knex.schema.createTable('maps_logs', table =>{
    table.integer('map_id')
    table.foreign('map_id').references('maps')
    table.integer('log_id')
    table.foreign('log_id').references('logs')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('maps_logs')
};
