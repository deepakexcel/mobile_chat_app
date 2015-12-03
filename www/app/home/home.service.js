(function() {
    'use strict';
    angular.module('starter')
            .factory('homeService', homeService);
    
    function homeService($window, $localStorage) {
        return {
            set: function(key, value) {
                $window.localStorage.setItem(key, value);
            }
        }
    }

})();