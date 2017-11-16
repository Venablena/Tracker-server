console.log("models running");
const env = process.env.NODE_ENV || 'development'

const knex = require('../db/connection')

function getLogs() {
  return knex('logs')
}

function createMap (body) {
  return knex('maps').insert(body.map, '*')
    .then(([result]) => {
      let newLogs = body.markers.map(item => {
       return {log_id: item, map_id: result.id }
        })
        return knex('maps_logs').insert(newLogs)
        .then([result] => result)
      })
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
  getLogs, createMap, find, destroy, patch
}
