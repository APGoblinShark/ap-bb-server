var _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());
exports._ = _;

var moment = require('moment');
exports.moment = moment;

var transactionEnum = {
  buy: 'BUY',
  sell: 'SELL'
};
exports.transactionEnum = transactionEnum;