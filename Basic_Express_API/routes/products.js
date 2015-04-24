var _ = require('../tools/utils')._;

var express = require('express');
var router = express.Router();

var productService = require('../services/products');
var transactionService = require('../services/transaction');
var transactionDtoBuilder = require('../dto/transactions');

/* GET product listing. */
router.get('/', function(req, res, next) {

  productService
    .getAllProducts()
    .then(function(products) {
      res.status(200).json({
        products: products
      });
    }, function(err) {
      res.status(500).json({
        error: err
      });
    });
});

router.get('/:id', function(req, res, next) {

  var id = req.params.id;

  productService
    .getProduct(id)
    .then(function(product) {
      res.status(200).json({
        product: product
      });
    }, function(err) {
      next(err);
    });

});

router.post('/:id/transactions', function(req, res, next) {

  var transactionDto = transactionDtoBuilder.transactionDtoFromController(req.body);

  if (_.isNull(transactionDto) || _.isNull(transactionDto.id) === false) {
    var err = new Error('Bad request: transaction object not correctly formatted.');
    err.status = 400;
    next(err);
    return;
  }

  var productId = req.params.id;

  transactionService
    .addTransaction(transactionDto, productId)
    .then(function(transaction) {
      res.status(200).json({
        transaction: transaction
      });
    }, function(err) {
      next(err);
    });
});
module.exports = router;
