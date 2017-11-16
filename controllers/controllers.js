console.log("controller running");
const model = require('../models/models')

function get (req, res, next) {
  model.getLogs().then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function create (req, res, next) {
  model.createMap(req.body).then(result => {
    res.status(201).json(result)
  }).catch(error => next(error))
}

function show (req, res, next) {
  model.find(req.params.id).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function destroy (req, res, next) {
  model.destroy(req.params.id).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function update (req, res, next) {
  model.patch(req.params.id, req.body).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

// function exists (req, res, next) {
//   Post.find(req.params.id).then(post => {
//     if (!post) {
//       const status = 404
//       const message = `Post with an id of ${req.params.id} was not found`
//       return next({ status, message })
//     }
//
//     return next()
//   })
// }
//
// function prune (req, res, next) {
//   Object.keys(req.body).forEach(key => {
//     if (!fields.includes(key)) delete req.body[key]
//   })
//
//   next()
// }
//
// function complete (req, res, next) {
//   const errors = fields.filter(field => !req.body[field])
//     .map(key => `${key} is a required field`)
//
//   if (errors.length) {
//     const status = 400
//     const message = `Fields are missing: ${errors.join(', ')}`
//     return next({ status, message })
//   }
//
//   return next()
// }

module.exports = {
  get, create, show, destroy, update
  //validations: { exists, prune, complete }
}
