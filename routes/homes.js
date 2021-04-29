const express = require('express');
const router = express.Router();
const homesController = require('../controller/homesController')


router.post('/homes', homesController.create)
router.get('/homes', homesController.getHomes)

module.exports = router;