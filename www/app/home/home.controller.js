(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);


    function homeController($scope, $rootScope, $state, googleLogin, parseService, homeService, userValidate) {
        $scope.userName = homeService.get('user_name');
        $scope.userPicture = homeService.get('user_picture');

    }
})();