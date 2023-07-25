const express = require('express')
const router = express.Router()
const backpackingCtrl = require('../controllers/backpacking')

// router.get('/backpacking', backpackingCtrl.viewBackpackingTrails)
router.get('/backpacking/new', backpackingCtrl.new)
router.post('/backpacking', backpackingCtrl.create)
router.delete('/backpacking/:id', backpackingCtrl.delete)


module.exports = router