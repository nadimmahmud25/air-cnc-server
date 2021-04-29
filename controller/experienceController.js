const experienceService = require('../services/experienceService')

module.exports.create = async (req, res, next) => {
  try {
    const experience = await experienceService.create(req.body);
    return res.status(201).json({data: experience})
  } catch (e) {
    console.error(e);
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}

module.exports.getExperience = async (req, res, next) => {
  try {
    const experience = await experienceService.getExperience({})
    res.status(200).json({data: experience})
  } catch (e) {
    console.error(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}

module.exports.getExperienceByIdAndDelete = async(req, res, next) => {
  try {
    const experience = await experienceService.getExperienceByIdAndDelete(req.params.id)
    return res.status(200).json({data: experience})
  } catch (e) {
    console.error(e)
    return res.status(505).json({message: `Something went wrong. ${e}`})
  }
}