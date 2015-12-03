(function() {
    'use strict';
    angular.module('starter')
            .factory('homeService', homeService);

    function homeService($window, $localStorage) {
        return {
            set: function(key, value) {
                $window.localStorage.setItem(key, value);
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