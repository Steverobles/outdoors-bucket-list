const express = require('express')
const router = express.Router()
const backpackingCtrl = require('../controllers/backpacking')

router.get('/backpacking/new', backpackingCtrl.new)
router.post('/backpacking', backpackingCtrl.create)


module.exports = router