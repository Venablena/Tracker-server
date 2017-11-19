const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/logs', ctrl.getLogs)
router.get('/maps', ctrl.getMaps)
router.post('/maps', ctrl.create)
router.get('/maps/:id', ctrl.showMap)
router.get('/logs/:id', ctrl.showLog)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)
router.post('/logs', ctrl.refreshLogs)

module.exports = router

//sheets
//https://sheets.googleapis.com/v4/spreadsheets/1e1GkbibPFIxJEyuWQsZnudRE2q3rQmTppUXr7-wrP1w/values/sheet1?key=AIzaSyDMxY1rQgAG7PruMhTZDNHMXDZ3nT_mUNc
