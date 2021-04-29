const mongoose = require('mongoose');
const shortId = require('shortid')
const { Schema } = mongoose;

const homesSchema = new Schema({
  _id: {
    type: String,
    default: shortId.generate
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  title: {
    type: String,
    require: true,
    trim: true
  },
  place: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  price: Number,
  avgRating: Number,
  totalRating: Number
}, {
  versionKey: false
})

module.exports = mongoose.model('Homes', homesSchema)