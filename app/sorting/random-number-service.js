'use strict';

hogwartsApp.factory('randomNumberService', function() {
    return {
        getInRange: function(min, max){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
});

