var _ = require('../tools/utils')._;
var Q = require('q');

var productRepository = require('../repository/products');

var productService = exports;

var getAllProducts = function getAllProducts() {
  var repositoryPromise =  productRepository.getAllProducts();
  return repositoryPromise;
};

var getProduct = function getProduct(id) {
  return productRepository.getProduct(id);
};

// Service public API
productService.getAllProducts = getAllProducts;
productService.getProduct = getProduct;
