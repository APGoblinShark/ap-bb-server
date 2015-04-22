var _ = require('../tools/utils')._;
var productValidator = require('../validator/products');
var transactionDtoBuilder = require('../dto/transactions');
var transactionService = require('../services/transaction');
var productDtoBuilder = exports;

var buildProductDtoWithTransactionFromDb = function buildProductDtoWithTransactionFromDb(product) {
  var productDto = buildProductDtoFromDb(product);

  if (_.isNull(productDto)) {
    return null;
  }

  var transactionDto = transactionDtoBuilder.transactionsDtoFromDb(product.transactions);

  if (_.isNull(transactionDto)) {
    transactionDto = [];
  }

  productDto.transactions = transactionDto;

  return productDto;
};

var buildProductDtoFromDb = function buildProductDtoFromDb (product) {
  if (productValidator.validateProduct(product) === false) {
    return null;
  }

  var quantity = transactionService.getQuantity(product.transactions);

  return {
    id: product.id,
    name: product.name,
    picture_url: product.picture_url,
    quantity: quantity
  };
};

var buildProductsDtoFromDb = function buildProductsDtoFromDb (products) {

  if (_.isArray(products) === false) {
    return null;
  }

  var productsDto = [];
  var productDto = {};

  _.each(products, function(product) {
    productDto = buildProductDtoFromDb(product);

    if (_.isNull(productDto) === false)
      productsDto.push(productDto);
  });

  return productsDto;
};

productDtoBuilder.buildProductsDtoFromDb = buildProductsDtoFromDb;
productDtoBuilder.buildProductDtoFromDb = buildProductDtoFromDb;
productDtoBuilder.buildProductDtoWithTransactionFromDb = buildProductDtoWithTransactionFromDb;