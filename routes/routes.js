const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/controllers')

router.get('/logs', ctrl.getLogs)
router.get('/maps', ctrl.getMaps)
router.post('/maps', ctrl.create)
router.get('/maps/:id', ctrl.show)
router.patch('/:id', ctrl.update)
router.delete('/:id', ctrl.destroy)

module.exports = router
