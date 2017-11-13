console.log("models running");
const env = process.env.NODE_ENV || 'development'

const knex = require('../db/connection')

function get() {
  return knex('logs')
}

function create (body) {
  return knex('logs')
    .insert(body)
    .returning('*')
    .then(([item]) => item)
}

function find (id) {
  return knex('logs').where({ id }).first()
}

function destroy (id) {
  return knex('logs')
    .del()
    .where({ id })
    .returning('*')
    .then(([ item ]) => item)
}

function patch (id, patch) {
  return knex('logs')
    .update(patch)
    .where({ id })
    .returning('*')
    .then(([ item ]) => item)
}

module.exports = {
  get, create, find, destroy, patch
}
