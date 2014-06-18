"use strict";

describe('CatalogController', function () {

    var mockCatalogRepository,
        scope,
        catalog = ["catalog"];

    beforeEach(function () {
        module("hogwartsApp");

        inject(function ($rootScope, $controller, catalogRepository) {
            scope = $rootScope.$new();

            mockCatalogRepository = sinon.stub(catalogRepository);
            mockCatalogRepository.getCatalog.returns(catalog);

            $controller("CatalogController", {
                $scope: scope,
                catalogRepository: mockCatalogRepository
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

});

