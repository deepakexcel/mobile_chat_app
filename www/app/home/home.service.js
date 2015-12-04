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
            fakeLogin: function() {
                var user = {
                    name: faker.name.findName(),
                    user_id: faker.random.uuid(),
//                email: faker.internet.email(),
//                image: faker.image.avatar()
                };
                this.set('user_name', user.name);
                this.set('user_id', user.user_id);
            }
        }
    }

})();