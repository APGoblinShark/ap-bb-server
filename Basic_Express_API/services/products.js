var _ = require('../tools/utils')._;
var Q = require('q');

var productRepository = require('../repository/products');

var productService = exports;

var getAllProducts = function getAllProducts() {
  return productRepository.getAllProducts();
};

var getProduct = function getProduct(id) {
  return productRepository.getProduct(id);
};

productService.getAllProducts = getAllProducts;
productService.getProduct = getProduct;