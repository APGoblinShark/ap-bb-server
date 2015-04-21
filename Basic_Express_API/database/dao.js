var db = require('./db');

var _ = require('../tools/utils')._;

var dao = {

  getProduct: function getProduct(opts, callback) {

    if (opts.id === null) {
      callback(null, db.products);
      return;
    }

    var product = _.findWhere(db.products, {id: opts.id});

    if (_.isUndefined(product)) {
      var error = {
        status: 404,
        message: 'Product not found'
      };
      callback(error, null);
      return;
    }

    callback(null, product);
  },

  getProductById: function getProductById(opts, callback) {
  },

  getTransactionById: function getTransactionById(opts, callback) {

  },

  updateProduct: function updateProduct(opts, callback) {

  },

  addTransactionToProduct: function addTransactionToProduct(opts, callback) {

  }
};

module.exports = dao;