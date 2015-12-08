(function() {
    'use strict';
    angular.module('starter')
        .factory('userValidate', userValidate);

    function userValidate(homeService, $state, $stateParams) {
        return {
            validUser: function() {
                var userId = homeService.get('user_id');
                if (_.isEmpty(userId)) {
                    $state.go('login');
                } else {
                    $state.go('home.contact');
                }
            }
        }
    }

})();