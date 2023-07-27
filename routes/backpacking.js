const express = require('express')
const router = express.Router()
const backpackingCtrl = require('../controllers/backpacking')

// router.get('/backpacking', backpackingCtrl.viewBackpackingTrails)
router.get('/backpacking/new', backpackingCtrl.new)
router.post('/backpacking', backpackingCtrl.create)
router.delete('/backpacking/:id', backpackingCtrl.delete)

// Route to render the update form for backpacking
router.get('/backpacking/:id/edit', backpackingCtrl.edit);

// Route to handle the update when the form is submitted
router.put('/backpacking/:id', backpackingCtrl.update);


module.exports = router