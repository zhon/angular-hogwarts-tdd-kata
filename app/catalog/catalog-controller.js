'use strict';

hogwartsApp
.controller("CatalogController", function ($scope, catalogRepository) {
    catalogRepository.getCatalog();
});
