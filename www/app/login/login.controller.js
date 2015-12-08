 (function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $rootScope, googleLogin, $state, facebookLogin, homeService, loginService, userValidate, $timeout, $q, contactService) {
        $scope.googleLogin = function() {
            var promise = googleLogin.startLogin();
            promise.then(function(data) {
                loginService.setParseUserData(data.google_id, data.email, data.name, data.picture);
                $rootScope.googleUser = data;
                homeService.set('user_id', $rootScope.googleUser.google_id);
                homeService.set('user_email', $rootScope.googleUser.email);
                homeService.set('user_name', $rootScope.googleUser.name);
                homeService.set('user_picture', $rootScope.googleUser.picture);
                $state.go('home.contact');

            }, function(data) {
                $scope.googleUser = data;
                console.log($scope.googleUser.name);
            });
        };
        $scope.fakeLogin = function() {
            loginService.setFakeParseUserData();
            $state.go('home.contact');
        };

        $scope.facebookLogin = function() {
            facebookLogin.login();
            contactService.statusLoginUser($localStorage.user_email);

        };



    }
})();