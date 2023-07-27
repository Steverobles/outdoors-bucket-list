var express = require('express');
var router = express.Router();
const hikingCtrl = require('../controllers/outdoors')



router.get('/', hikingCtrl.index)
router.get('/new', hikingCtrl.new)
router.get('/:id',hikingCtrl.show)
router.post('/', hikingCtrl.create)
router.delete('/:id', hikingCtrl.delete)
// Route to render the update form for hiking
router.get('/:id/edit', hikingCtrl.edit);

// Route to handle the update when the form is submitted
router.put('/:id', hikingCtrl.update);

module.exports = router;
