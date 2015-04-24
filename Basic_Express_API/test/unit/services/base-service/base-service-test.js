/*jshint expr: true*/

/*

require('../../tests-helper');

describe('ExperienceService', function() {

  // stub-ed API
  var emptyFn = function emptyFn() {};

  var testedService = null;

  // test data
  var _testData = readFileAsJSON(__dirname + '/xxxxxxxxxxxx-data-test.json');
  var testData = null; // will be copied from _testData beforeEach test

  /////////////////
  //
  // someMethod(callback)
  //
  /////////////////
  describe('#someMethod()', function() {

    // beforeEach (stubs, renew service)
    beforeEach(function() {
      // Fresh stub, copied from API.
      // So no need to individually call restore() on stubed methods.
      testData = deepCloneWithProblemOnDateObject(_testData);

      // renew testedService & proxy dependencies
      testedService = proxyquire('../../services/tested-service', {
        // '../dao/dao': {},
        // '../repository/project-repository': projectRepositoryApiStub
      });
    });

    // afterEach (restore stubs, forgot service)
    afterEach(function() {
      // restore all stub-ed API

      // forgot about the service
      testedService = null;
    });


    it('should test my super cool method', function() {
      // prepare test data
      expect(testData).to.have.property('projectDtoToCreate');
      var projectDtoToCreate = testData.projectDtoToCreate;

      // prepare spies, stubs, ...
      var createdProjectId;

      sinon.stub(projectRepositoryApiStub, 'createProject', function(projectDto, callback) {
        createdProjectId = projectDto.id;
        callback(null, projectDto);
      });

      var serviceCreateProjectCallback = sinon.spy();

      // do
      testedService.createProject(projectDtoToCreate, serviceCreateProjectCallback);

      // expectations
      projectDtoToCreate.id = createdProjectId;

      expect(serviceCreateProjectCallback).to.have.been.calledWith(null,
        projectDtoToCreate);
    });


  });

});

*/
