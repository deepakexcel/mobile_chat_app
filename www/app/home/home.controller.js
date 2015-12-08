(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin, $localStorage, parseService, homeService, userValidate) {
        $scope.userName = homeService.get('user_name');
        $scope.userPicture = homeService.get('user_picture');
        $scope.logout = function() {
            parseService.logOut($localStorage.user_email);
            if (ionic.Platform.isAndroid()) {
                facebookConnectPlugin.logout(function() {
                    console.log('logout');
                });
            }
            homeService.removeAll();
            $state.go('login');
        };

    }
})();