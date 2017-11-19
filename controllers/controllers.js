const model = require('../models/models')
const sheet = require('../models/sheets')

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

function showMap (req, res, next) {
  model.findMap(req.params.id).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

function showLog (req, res, next) {
  model.findLog(req.params.id).then(result => {
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

function refreshLogs (req, res, next) {
  model.transferData(req.body).then(result => {
    res.json(result)
  }).catch(error => next(error))
}

module.exports = {
  getMaps, getLogs, create, showMap, showLog, destroy, update, refreshLogs
}
