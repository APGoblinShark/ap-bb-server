var express = require('express');
var router = express.Router();

var productService = require('../services/products');

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
        products: product
      });
    }, function(err) {
      res.status(err.status).json(err);
    });
});

router.post('/:id', function(req, res, next) {
  if (req.body.product === void 0) {
    var err = new Error('Product Not Found');
    err.status = 404;
    next(err);
    return;
  }

  var product = req.body.product;

  products.push(product);

  res.status(200).json({
    products: products
  });
});
module.exports = router;
