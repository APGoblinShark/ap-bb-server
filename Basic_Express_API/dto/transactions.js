var utils = require('../tools/utils');
var _ = utils._;

var transactionValidator = require('../validator/transactions');

var transactionDtoBuilder = exports;

var transactionDtoFromDb = function transactionDtoFromDb(transaction) {

 if (transactionValidator.validateTransaction(transaction, true) === false) {
   return null;
 }

  return {
    id: transaction.id,
    date: utils.moment(transaction.date).format(),
    price: transaction.price,
    quantity: transaction.quantity,
    movement: transaction.movement,
    details: transaction.details
  }
};

var transactionsDtoFromDb = function transactionsDtoFromDb(transactions) {

  if (transactionValidator.validateTransactions(transactions) === false) {
    return null;
  }

  var transactionsDto = [];
  var transactionDto = {};

  _.each(transactions, function(transaction) {
    transactionDto = transactionDtoFromDb(transaction);

    if (_.isNull(transactionDto) === false) {
      transactionsDto.push(transactionDto);
    }
  });

  return transactionsDto;
};

var transactionDtoFromController = function transactionDtoFromController(transaction) {
  if (transactionValidator.validateTransaction(transaction, false) === false) {
    return null;
  }

  return {
    id: null,
    date: utils.moment().format(),
    price: transaction.price,
    quantity: transaction.quantity,
    movement: transaction.movement,
    details: transaction.details
  }
};

transactionDtoBuilder.transactionDtoFromDb = transactionDtoFromDb;
transactionDtoBuilder.transactionsDtoFromDb = transactionsDtoFromDb;
transactionDtoBuilder.transactionDtoFromController = transactionDtoFromController;