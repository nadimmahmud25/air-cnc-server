const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController')

router.post('/booking', bookingController.create)
router.get('/booking', bookingController.getBookingByEmail)


module.exports = router;