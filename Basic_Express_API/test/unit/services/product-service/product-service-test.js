/*jshint expr: true*/

require('../../tests-helper');


// test-suite specific helper
// var roleDtoBuilder = require('../../../../dto-builders/role-dto');

describe('ProductService', function() {

  // stub-ed API
  var emptyFn = function emptyFn() {};

  // Internal service dependency API
  var _productRepositoryAPI = {
    getAllProducts: emptyFn,
    getProduct: emptyFn,
    addTransactionToProduct: emptyFn
  };

  var _productServiceAPI = {
    getAllProducts: emptyFn,
    getProduct: emptyFn
  };

  // Internal service dependency -- will be created from scratch between each test
  var productRepositoryAPI = null;

  // Tested service -- will be created from scratch between each test
  var productServiceAPI = null;

  // test data
  var _testData = readFileAsJSON(__dirname + '/product-data-test.json');
  var testData = null; // will be copied from _testData beforeEach test

  /////////////////
  //
  // getAllProducts()
  //
  /////////////////
  describe('#getAllProducts()', function() {

    // beforeEach (create stubs, renew service)
    beforeEach(function() {
      testData = deepCloneWithProblemOnDateObject(_testData);

      productRepositoryAPI = _.extend({}, _productRepositoryAPI);
      productServiceAPI = _.extend({}, _productServiceAPI);

      // renew projectService & proxy dependencies
      productServiceAPI = proxyquire('../../services/products', {
        '../repository/products': productRepositoryAPI
      });
    });

    // afterEach (restore stubs, forgot service)
    afterEach(function() {
      // restore all stub-ed API

      // forgot about the service
      productServiceAPI = null;
    });


/*
    // Unit test sample
    it('should succeed because its a demo', function(done) {

      // # 1 3# Stub repository layer
      //
      sinon.stub(productRepositoryAPI, 'getAllProducts', function() {
        return Q.fcall(function() {

          var data = [];
          console.log('plop');

          return data;
        });
      });


      // # 2 # Perform service call
      var servicePromise = productServiceAPI.getAllProducts();

      // # 3 #: Test expectations
      servicePromise.then(function(data) {

          console.log('hey');
          console.log(data);

          expect(servicePromise).to.be.fulfilled;
          expect(servicePromise).to.be.rejected;

          servicePromise.should.be.rejected;
          data.should.not.be.empty;

          done();
        })
        // end of promise chain
        .done();
    });
    */

    // Unit test sample
    it('fail fail fail', function(done) {

      // # 1 3# Stub repository layer
      //
      sinon.stub(productRepositoryAPI, 'getAllProducts', function() {
        return Q.fcall(function() {

          throw new Error();
        });
      });


      // # 2 # Perform service call
      var servicePromise = productServiceAPI.getAllProducts();

      // # 3 #: Test expectations
      servicePromise.then(null,
          function() {

            expect(servicePromise).to.be.fulfilled;
            expect(servicePromise).to.be.rejected;

            servicePromise.should.be.rejected;

            done();
          })
        // end of promise chain
        .done();
    });


  });

});
