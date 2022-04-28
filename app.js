const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

require('dotenv').config()

const indexRouter = require('./routes/index');
const shortenerRouter = require('./routes/shortener')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/shortener', shortenerRouter)

//mongoose.connect(DATABASE_URL, { useNewUrlParser: true })
//const db = mongoose.connection
//db.on('error', console.log('Failed to connect to DB'))
//db.once('open', console.log('Connected to DB'))


module.exports = app;
