var _ = require('../tools/utils')._;
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

productRepository.getAllProducts = getAllProducts;