'use strict';

hogwartsApp
.factory('registrationService', function(catalogRepository, wizardRepository) {
    return {
        register: function(courseId) {
            var course = catalogRepository.getCourse(courseId),
                wizard = wizardRepository.get();

            wizard.courses[course.id] = course;
            wizardRepository.save(wizard);
        }
    };

});
