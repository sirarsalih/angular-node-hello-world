describe('mainController unit tests.', function(){
    var rootScopeFake, logFake, mainServiceFake, httpBackendFake;
    var mainController;

    beforeEach(angular.mock.module('myApp'));

    beforeEach(angular.mock.inject(function($rootScope, $log, $httpBackend, $controller, mainService){
        rootScopeFake = $rootScope.$new();
        logFake = $log;
        mainServiceFake = mainService;
        httpBackendFake = $httpBackend;
        mainController = $controller('mainController', {
            $scope: rootScopeFake,
            $log: logFake,
            mainService: mainServiceFake
        });
    }));

    afterEach(function() {
        httpBackendFake.verifyNoOutstandingExpectation();
        httpBackendFake.verifyNoOutstandingRequest();
    });

    it('Should do a GET call when message is requested.', function(){
        httpBackendFake.when('GET', 'http://localhost:1337/').respond("Hello world! (GET)");
        httpBackendFake.expectGET('http://localhost:1337/');
        rootScopeFake.getMessage();
        httpBackendFake.flush();
    });

    it('Should do a POST call when message is posted.', function(){
        httpBackendFake.when('POST', 'http://localhost:1337/post').respond("Hello world! (POST)");
        httpBackendFake.expectPOST('http://localhost:1337/post');
        rootScopeFake.postMessage();
        httpBackendFake.flush();
    });
});

