const homesServices = require('../services/homesService')

module.exports.create = async (req, res, next) => {
  try {
    const homes = await homesServices.create(req.body)
    return res.status(201).json({data: homes})
  } catch (e) {
    console.log(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}

module.exports.getHomes = async (req, res, next) => {
  try {
    const homes = await homesServices.getHomes({})
    return res.status(201).json({data: homes})
  } catch (e) {
    console.log(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}
