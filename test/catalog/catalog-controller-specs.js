"use strict";

describe('CatalogController', function () {

    var mockCatalogRepository,
        scope,
        mockRegistrationService,
        catalog = ["catalog"];

    beforeEach(function () {
        module("hogwartsApp");

        inject(function ($rootScope, $controller, catalogRepository, registrationService) {
            scope = $rootScope.$new();

            mockCatalogRepository = sinon.stub(catalogRepository);
            mockCatalogRepository.getCatalog.returns(catalog);
            mockRegistrationService = sinon.stub(registrationService);

            $controller("CatalogController", {
                $scope: scope,
                catalogRepository: mockCatalogRepository,
                registrationService: mockRegistrationService
            });
        });
    });

    describe('when the controller first loads', function () {

        it('the course catalog is retrieved', function () {
            sinon.assert.calledOnce(mockCatalogRepository.getCatalog);
        });

        it('puts the catalog on the scope', function() {
            expect(scope.catalog).toEqual(catalog);
        });

    });

    describe('when registering for a course', function() {
        var courseId = 'courseId';
        var response = {success: true, message: ''};

        it('adds the course to the wizard\'s schedule', function() {
            mockRegistrationService.register.returns(response);
            scope.register(courseId);
            sinon.assert.calledWith(mockRegistrationService.register, courseId);
        });

        it('adds the registration response to the scope', function() {
            mockRegistrationService.register.returns(response);
            scope.register(courseId);
            expect(scope.response).toEqual(response);
        });

    });

});

