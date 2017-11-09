console.log("models running");
const env = process.env.NODE_ENV || 'development'

const knex = require('../db/connection')

function get() {
  return knex('events')
}

function create (body) {
  return knex('events')
    .insert(body)
    .returning('*')
    .then(([item]) => item)
}

function find (id) {
  return knex('events').where({ id }).first()
}

function destroy (id) {
  return knex('events')
    .del()
    .where({ id })
    .returning('*')
    .then(([ item ]) => item)
}

function patch (id, patch) {
  return knex('events')
    .update(patch)
    .where({ id })
    .returning('*')
    .then(([ item ]) => item)
}

module.exports = {
  get, create, find, destroy, patch
}
