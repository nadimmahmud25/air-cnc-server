const express = require('express');
const router = express.Router();
const hotelsController = require('../controller/hotelsController')


router.post('/hotels', hotelsController.create)

router.get('/hotels', hotelsController.getHotels)

module.exports = router;