const hotelServices = require('../services/hotelServices');

module.exports.create = async (req, res, next) => {
  try {
    const hotelInfo = await hotelServices.create(req.body)
    return res.status(201).json({data: hotelInfo})
  } catch (e) {
    console.log(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}

module.exports.getHotels = async (req, res, next) => {
  try {
    const hotels = await hotelServices.getHotels({})
    return res.status(201).json({data: hotels})
  } catch (e) {
    console.log(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}