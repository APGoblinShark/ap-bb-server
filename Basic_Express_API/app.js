//TODO: delete that
var corsOptions = {
  origin: '*', //replace to frontend domain
  methods: ['GET, PUT, POST, DELETE, OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
var cors = require('cors');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');

var products = require('./routes/products');

var app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/products', products);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.status(404).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.status(404).json({
    message: err.message,
    error: {}
  });
});

var server = app.listen(3000, function () {
  mongoose.connect('mongodb://localhost/test');

  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('connection to mongodb : success');
  });

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port)
});

module.exports = app;
