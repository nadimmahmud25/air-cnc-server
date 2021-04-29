const express = require('express');
const logger = require('morgan');
require('dotenv').config()
const cors = require('cors')
const path = require('path');

const db = require('./db/db')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const experienceRouter = require('./routes/experience');
const homesRouter = require('./routes/homes');
const hotelRouter = require('./routes/hotels')
const bookingRouter = require('./routes/booking');


const app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', experienceRouter);
app.use('/api', homesRouter);
app.use('/api', bookingRouter)
app.use('/api', hotelRouter)

module.exports = app