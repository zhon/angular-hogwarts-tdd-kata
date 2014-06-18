"use strict";

describe('registrationService', function () {

    var service,
        mockCatalogRepository,
        mockWizardRepository;

    beforeEach(function () {
        module("hogwartsApp");

        inject(function (registrationService, catalogRepository, wizardRepository) {
            service = registrationService;
            mockCatalogRepository = sinon.stub(catalogRepository);
            mockWizardRepository = sinon.stub(wizardRepository);
        });
    });

    describe('when registering for a course', function () {
        var course = {id: 'Potions'};

        beforeEach(function() {
            mockCatalogRepository.getCourse.returns(course);
            mockWizardRepository.get.returns({courses: {}});
        });

        it ('saves the course to the wizardRepository', function() {
            service.register(course.id);
            sinon.assert.calledWith(
                mockWizardRepository.save, {courses: {'Potions' : course}}
            );
        });

    });

});
