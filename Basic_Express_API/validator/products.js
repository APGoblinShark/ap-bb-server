var _ = require('../tools/utils')._;


var productValidator = exports;

var validateProduct = function validateProduct(product) {

  if (_.isObject(product) === false) {
    return false;
  }

  if (_.isString(product.id) === false || _.str.isBlank(product.id)) {
    return false;
  } else if (_.isString(product.name) === false || _.str.isBlank(product.name)) {
    return false;
  } else if (_.isString(product.picture_url) === false || _.str.isBlank(product.picture_url)) {
    return false;
  } else if (_.isArray(product.transactions) === false) {
    return false;
  }

  return true;
};

productValidator.validateProduct = validateProduct;