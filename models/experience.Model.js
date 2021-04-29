const mongoose = require('mongoose');
const shortId = require('shortid')
const { Schema } = mongoose;

const experienceSchema = new Schema({
  _id: { 
    type: String,
    default: shortId.generate
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  place: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  pricePerPerson: Number,
  avgRating: Number,
  totalRating: Number,
}, {
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model( 'Experience', experienceSchema )