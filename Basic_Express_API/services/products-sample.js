var _ = require('../tools/utils')._;
var Q = require('q');

var productRepository = require('../repository/products');

var productService = exports;

var getAllProducts = function getAllProducts() {
  var repositoryPromise = productRepository.getAllProducts();
  return repositoryPromise;
};

var getProduct = function getProduct(id) {
  return Q.fcall(
    function() {

      if (!id || id.length !== 0) {
        throw new Error('bad parameter');
      }

      if (_.str.isBlank(id) === true) {
        throw new Error('bad parameter');
      }

      if (_.isNumber(id) !== true) {
        throw new Error('bad parameter');
      }

      var repositoryPromise = productRepository.getProduct(id);
      return repositoryPromise;

    });
};

var getProduct = function getProduct(id) {
  return Q.fcall(
    function() {

      if (!id || id.length !== 0) {
        throw new Error('bad parameter');
      }

      var repositoryPromise = productRepository.getProduct(id);
      return repositoryPromise;

    });
};

// Service public API
productService.getAllProducts = getAllProducts;
productService.getProduct = getProduct;
