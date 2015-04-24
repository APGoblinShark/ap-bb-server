var utils = require('../tools/utils');
var _ = utils._;

var Q = require('q');
var dao = require('../database/dao');
var productDto = require('../dto/products');

var productRepository = exports;

var getAllProducts = function getAllProducts() {
  return Q.fcall(
    function() {
      var opts = {
        id: null
      };

      var deferred = Q.defer();

      dao.getProduct(opts, function(err, products) {
        if (err) {
          deferred.reject(err);
          return;
        }
        var dtoProduct = productDto.buildProductsDtoFromDb(products);
        if (_.isUndefined(dtoProduct) && _.isNull(dtoProduct)) {
          deferred.reject();
          return;
        }

        deferred.resolve(dtoProduct);
      });

      return deferred.promise;
    });
};

var getProduct = function getProduct(id) {
  return Q.fcall(
    function() {

      var opts = {
        id: id
      };

      var deferred = Q.defer();

      dao.getProduct(opts, function(err, product) {
        if (err) {
          deferred.reject(err);
          return;
        }
        var dtoProduct = productDto.buildProductDtoWithTransactionFromDb(product);

        if (_.isNull(dtoProduct)) {
          var error = {
            status: 500,
            message: 'Unexpected product.'
          };
          deferred.reject(error);
          return;
        }
        deferred.resolve(dtoProduct);
      });

      return deferred.promise;
    });
};

// Repositorty public API
productRepository.getAllProducts = getAllProducts;
productRepository.getProduct = getProduct;
