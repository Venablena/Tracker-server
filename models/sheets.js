const env = process.env.NODE_ENV || 'development'
const knex = require('../db/connection')

function transferData (body) {
  console.log("data transfer");
  let sheetData = body.map(array => {
    return {tag: array[0], dateTime: array[1], long: array[2], lat: array[3]}
  })
  console.log(sheetData)
  // return knex('logs').insert(body, '*')
  //   .then((response) => response)
}

module.exports = {transferData}
