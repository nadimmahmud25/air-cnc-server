const Hotels = require('../models/hotel.Model')


module.exports.create = (data) => {
  return Hotels.create(data)
}

module.exports.getHotels = (query) => {
  return Hotels.find(query)
}