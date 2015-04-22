var _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
exports._ = _;

var uuid = require('node-uuid');

var moment = require('moment');
exports.moment = moment;

var generateUUID = function generateUUID() {
  return uuid.v4();
};

var transactionEnum = {
  buy: 'BUY',
  sell: 'SELL'
};

exports.transactionEnum = transactionEnum;
exports.generateUUID = generateUUID;