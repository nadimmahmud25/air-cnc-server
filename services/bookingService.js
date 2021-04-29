const Booking = require('../models/booking.Model')

module.exports.create = (bookingData) => {
  return Booking.create(bookingData)
}

module.exports.getBookingByEmail = (email) => {
  return Booking.find({email: email})
}