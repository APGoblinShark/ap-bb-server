var db = require('./db');

var _ = require('../tools/utils')._;

var dao = {

  getProduct: function getProduct(opts, callback) {

    if (_.isNull(opts.id)) {
      callback(null, db.products);
      return;
    }

    var product = _.findWhere(db.products, {id: opts.id});

    if (_.isUndefined(product)) {
      var error = {
        status: 404,
        message: 'Product not found'
      };
      callback(error);
      return;
    }

    callback(null, product);
  },

  updateProduct: function updateProduct(opts, callback) {

    var productPosition = _.findIndex(db.products, function(product) {
      return product.id === opts.productId;
    });

    if (productPosition === -1) {
      var error = {
        status: 404,
        message: 'Product not found'
      };
      callback(error);
      return;
    }

    db.products[productPosition] = opts.product;

    callback(null, db.products[productPosition]);
  }

};

module.exports = dao;