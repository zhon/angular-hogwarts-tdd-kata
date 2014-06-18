'use strict';

hogwartsApp
.controller("CatalogController", function ($scope, catalogRepository, registrationService) {
    $scope.catalog = catalogRepository.getCatalog();

    $scope.register = function(courseId) {
        registrationService.register(courseId);
    };
});
