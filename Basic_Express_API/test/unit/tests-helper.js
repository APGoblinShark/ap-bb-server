// test helper

var assert = require('assert');
global.assert = assert;

var chai = require('chai');
var sinonChai = require('sinon-chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(sinonChai);
chai.use(chaiAsPromised);

global.expect = chai.expect;
global.sinon = require('sinon');

var proxyquire = require('proxyquire');
global.proxyquire = proxyquire;

var Q = require('q');
global.Q = Q;

//TODO: potentially missing
//  - should.js
var should = require('should');
// var should = require('chai').should(); //actually call the the function
global.should = should;

var deepCloneWithProblemOnDateObject = function deepCloneWithProblemOnDateObject(source) {
  return JSON.parse(JSON.stringify(source));
};
global.deepCloneWithProblemOnDateObject = deepCloneWithProblemOnDateObject;



// helper read file
var _ = require('underscore');
_.str = require('underscore.string');
_.mixin(_.str.exports());

global._ = _;

var fsModule = require('fs');
var readFileAsJSON = function readFileAsJSON(filepath) {
  if (_.isString(filepath) === false) {
    throw new Error('readFileAsJSON: filepath is not a string');
  }
  if (_.str.isBlank(filepath)) {
    throw new Error('readFileAsJSON: filepath is blank');
  }

  if (fsModule.existsSync(filepath) === false) {
    throw new Error('readFileAsJSON: filepath doesn\'t exists: ' + filepath);
  }

  var content = fsModule.readFileSync(filepath);

  if (_.isEmpty(content)) {
    throw new Error('Empty content of: ' + filepath);
  }

  var contentJSON;
  try {
    contentJSON = JSON.parse(content);
  } catch (parseErr) {
    console.log('Failed to parse content of %s', filepath);
    throw parseErr;
  }

  return contentJSON;
};

global.readFileAsJSON = readFileAsJSON;



// Test helper: generate random ID
var uuid = require('node-uuid');

function generateNoDashUUID() {
  var uuidToken = uuid.v4();
  var uuidNoDash = uuidToken.replace(/-/g, '');
  return uuidNoDash;
}

global.generateNoDashUUID = generateNoDashUUID;


// Generate all kind of random values
var Chance = require('chance');
var chance = new Chance();
global.chance = chance;

// Generate all kind of random values
var moment = require('moment');
global.moment = moment;
