var utils = require('../tools/utils');
var _ = utils._;

var transactionValidator = exports;


var validateTransaction = function validateTransaction(transaction, fromDb) {

  if (_.isObject(transaction) === false || _.isArray(transaction)) {
    return false;
  }

  if (fromDb) {
    if (_.isString(transaction.id) === false || _.str.isBlank(transaction.id)) {
      return false;
    } else if (_.isUndefined(transaction.date) || utils.moment(transaction.date).isValid() === false) {
      return false;
    }
  }

  if (_.isNumber(transaction.price) === false || _.str.isBlank(transaction.price)) {
    return false;
  } else if (_.isNumber(transaction.quantity) === false || _.str.isBlank(transaction.quantity)) {
    return false;
  } else if (_.isString(transaction.movement) === false &&
    transaction.movement !== utils.transactionEnum.buy && transaction.movement !== utils.transactionEnum.sell) {
    return false;
  } else if (_.isString(transaction.details) === false) {
    return false;
  }

  return true;
};

var validateTransactions = function validateTransactions(transactions) {

  if (_.isArray(transactions) === false) {
    return false;
  }
};

transactionValidator.validateTransaction = validateTransaction;
transactionValidator.validateTransactions = validateTransactions;