'use strict';

hogwartsApp
.controller("CatalogController", function ($scope, catalogRepository) {
    $scope.catalog = catalogRepository.getCatalog();
});
