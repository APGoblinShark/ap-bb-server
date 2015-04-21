var utils = require('../tools/utils');
var _ = utils._;
var transactionDtoBuilder = require('../dto/transactions');

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

transactionService.getQuantity = getQuantity;