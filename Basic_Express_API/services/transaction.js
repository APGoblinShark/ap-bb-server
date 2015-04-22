var utils = require('../tools/utils');
var _ = utils._;
var transactionDtoBuilder = require('../dto/transactions');

var productRepository = require('../repository/products');

var productService = require('./products');
var transactionService = exports;

var getQuantity = function getQuantity(transactions) {

  var transactionsDto = transactionDtoBuilder.transactionsDtoFromDb(transactions);

  if (_.isEmpty(transactionsDto)) {
    return 0;
  }

  var quantityTotal = 0;

  _.each(transactionsDto, function(transaction) {

    if (transaction.movement === utils.transactionEnum.buy) {
      quantityTotal -= transaction.quantity
    } else {
      quantityTotal += transaction.quantity
    }
  });

  return quantityTotal;
};

var addTransaction = function addTransaction(transactionDto, productId) {
  return productRepository.addTransactionToProduct(transactionDto, productId);
};

transactionService.getQuantity = getQuantity;
transactionService.addTransaction = addTransaction;