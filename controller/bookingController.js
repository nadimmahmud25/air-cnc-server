const bookingService = require('../services/bookingService')

module.exports.create = async (req, res, next) => {
  try {
    const booking = await bookingService.create(req.body);
    res.status(201).json({data: booking})
  } catch (e) {
    console.error(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}

module.exports.getBookingByEmail = async (req, res, next) => {
  try {
    const email = await req.params.email
    const booking = await bookingService.getBookingByEmail(email);
    res.status(201).json({data: booking})
  } catch (e) {
    console.error(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}