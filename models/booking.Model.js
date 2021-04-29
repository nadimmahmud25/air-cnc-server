const mongoose = require('mongoose');
const shortid = require('shortid');
const { Schema } = mongoose;


const bookingSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate
  },
  name: String,
  email: String,
  guest: Number,
  totalPrice: Number,
  message: String,
  arrival: String,
  departure: String,
  address: {
    type: String,
    required: true,
    trim: true
  },
  hotel: [{
    _id: String,
    title: String,
  }]
}, {
  versionKey: false,
  timestamps: true
})

module.exports = mongoose.model('Booking', bookingSchema);