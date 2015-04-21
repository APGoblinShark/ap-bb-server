var _ = require('../tools/utils')._;
var transactionValidator = require('../validator/transactions');

var transactionDtoBuilder = exports;

var transactionDtoFromDb = function transactionDtoFromDb(transaction) {

 if (transactionValidator.validateTransaction === false) {
   return null;
 }

  return {
    id: transaction.id,
    date: moment(transaction.date).format(),
    price: transaction.price,
    quantity: transaction.quantity,
    movement: transaction.movement,
    details: transaction.details
  }
};

var transactionsDtoFromDb = function transactionsDtoFromDb(transactions) {
  if (transactionValidator.validateTransactions === false) {
    return null;
  }

  var transactionsDto = [];
  var transactionDto = {};

  _.each(transactions, function(transaction) {
    transactionDto = transactionDtoFromDb(transaction);

    if (!_.isNull(transactionDto)) {
      transactionsDto.push(transactionDto);
    }
  });

  return transactionsDto;
};

transactionDtoBuilder.transactionDtoFromDb = transactionDtoFromDb;
transactionDtoBuilder.transactionsDtoFromDb = transactionsDtoFromDb;