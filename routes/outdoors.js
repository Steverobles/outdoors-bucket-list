var express = require('express');
var router = express.Router();
const hikingCtrl = require('../controllers/outdoors')

router.get('/new', hikingCtrl.new)
router.post('/', hikingCtrl.create)

module.exports = router;
