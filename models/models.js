console.log("models running");
// const path = require('path')
// const fs = require('fs')
//
// const filePath = path.join(__dirname, '../assets/db_posts.json')
const knex = require('../db/connection')

function get () {
  //console.log(knex('events'))
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
    // .update(patch)
    // .where({ id })
    // .returning('*')
    // .then(([ item ]) => item)
}

module.exports = {
  get, create, find, destroy, patch
}
