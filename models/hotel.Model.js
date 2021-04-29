const mongoose = require('mongoose');
const shortid = require('shortid');
const { Schema } = mongoose;


const hotelSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true,
    trim: true
  },
  guest: Number,
  bedroom: Number,
  bed: Number,
  bath: Number,
  kitchen: String,
  feature: String,
  pricePerNight: Number,
  avgRating: Number,
  totalRating: Number, 
})

module.exports = mongoose.model('Hotels', hotelSchema); 