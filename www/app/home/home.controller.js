(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin, $localStorage, parseService, homeService, userValidate) {
        $scope.userName = homeService.get('user_name');
        $scope.userPicture = homeService.get('user_picture');
        $scope.logout = function() {
            console.log($localStorage.user_email);
            parseService.logOut($localStorage.user_email);
            homeService.removeAll();
            $state.go('login');
        }
    }
})();