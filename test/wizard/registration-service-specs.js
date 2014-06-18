"use strict";

describe('registrationService', function () {

    describe('when registering for a course', function () {
        var course = {id: 'Potions'};

        it ('saves the course to the wizardRepository', function() {
            service.register(course.id);
            sinon.assert.calledWith(
                mockWizardRepository.save, {courses: {'Potions' : course}}
            );
        });

    });

});
