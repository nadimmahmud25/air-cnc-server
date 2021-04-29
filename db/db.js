const mongoose = require('mongoose');

const dbUri = process.env.MONGODB_URI;

if(!dbUri) {
  console.error("MongoDB uri not set in env file")
  return new Error("MongoDB uri not set in env file")
}

mongoose.connect(dbUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, err => {
  if(err) {
    console.error(`failed to connect using mongoose ${err}`)
  } else {
    console.log('connected to db server')
  }
})