const Homes = require('../models/homes.Model')


module.exports.create = (data) => {
  return Homes.create(data)
}

module.exports.getHomes = (query) => {
  return Homes.find(query)
}