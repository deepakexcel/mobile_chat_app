 (function() {
    'use strict';
    angular.module('starter')
            .factory('homeService', homeService);

    function homeService($localStorage) {
        return {
            set: function(key, value) {
                $localStorage[key] = value;
            },
            get: function(key) {
                return $localStorage[key];
            },
            removeAll: function() {
                $localStorage.$reset();
            },
            fakeLogin: function() {
                this.set('user_name', faker.name.findName());
                this.set('user_id', faker.random.uuid());
                this.set('user_email', faker.internet.email());
                this.set('user_picture', faker.image.abstract());
            }
        }
    }

})();