console.log("models running");
const env = process.env.NODE_ENV || 'development'

const knex = require('../db/connection')

function getLogs() {
  return knex('logs')
}

function getMaps() {
  return knex('maps')
}

function createMap (body) {
  return knex('maps').insert(body.map, '*')
    .then(([newMap]) => {
      let newLogs = body.markers.map(item => {
       return {log_id: item, map_id: newMap.id }
        })
        return knex('maps_logs').insert(newLogs)
        // .returning('*')
        // .then(([ item ]) => item)
        .then(() => newMap)
      })
      .catch(error => {
       console.error(error)
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
  getLogs, getMaps, createMap, find, destroy, patch
}
