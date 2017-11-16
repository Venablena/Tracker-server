console.log("controller running");
const model = require('../models/models')

function getLogs (req, res, next) {
  model.getLogs().then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function getMaps (req, res, next) {
  model.getMaps().then(result => {
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

module.exports = {
  getMaps, getLogs, create, show, destroy, update
}
