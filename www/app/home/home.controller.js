(function() {
    'use strict';

    angular.module('starter')

            .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin, parseService, homeService, userValidate, $localStorage) {
        $scope.userName = homeService.get('user_name');
        $scope.userPicture = homeService.get('user_picture');
        $scope.logout = function(){
            parseService.logOut($localStorage.user_email);
            facebookConnectPlugin.logout(function(){
        console.log('logout');
        });
        	homeService.removeAll();
        	$state.go('login');
        }
    }
})();