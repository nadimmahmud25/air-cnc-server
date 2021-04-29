const Experience = require('../models/experience.Model')

module.exports.create = experience => {
  return Experience.create(experience)
}

module.exports.getExperience = (query) => {
  return Experience.find(query);
}

module.exports.getExperienceByIdAndDelete = (id) => {
  return Experience.deleteOne({_id: id})
}