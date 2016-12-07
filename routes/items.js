var express = require('express');
var router = express.Router();
var itemController = require('../controllers/item_controller');

// /* GET users listing. */
router.put('/',itemController.putItem);
module.exports = router;
