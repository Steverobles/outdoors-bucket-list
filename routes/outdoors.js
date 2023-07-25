var express = require('express');
var router = express.Router();
const hikingCtrl = require('../controllers/outdoors')



router.get('/', hikingCtrl.index)
router.get('/new', hikingCtrl.new)
router.post('/', hikingCtrl.create)
router.delete('/:id', hikingCtrl.delete)

module.exports = router;
