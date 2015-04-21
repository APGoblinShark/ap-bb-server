var db = require('./db');

var _ = require('../tools/utils')._;

var dao = {

  getProduct: function getProduct(opts, callback) {

    if (opts.id === null) {
      callback(null, db.products)
    } else {
      callback(null, _.findWhere(db.products, {id: opts.id}));
    }
    //error
    //callback('Error in getProduct');
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