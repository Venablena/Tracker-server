exports.seed = function(knex, Promise) {

  return knex('logs').del()
    .then(() => knex('locations').del())
    .then(() => knex('tags').del())
}
