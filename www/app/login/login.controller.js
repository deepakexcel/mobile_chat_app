(function() {
    'use strict';

    angular.module('starter')
            .controller('loginController', loginController);

    function loginController($scope, $rootScope, googleLogin, $state, facebookLogin, homeService, loginService) {
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
            });
        };
        facebookLogin.timeout();
        $scope.facebookLogin = function() {
            var data = facebookLogin.login();
            console.log(data);
            self.getData();
        };
        self.getData = function() {
            facebookConnectPlugin.api('/me', ['public_profile'], function(data) {
                console.log(data);
                $scope.$apply(function() {
                    $rootScope.user = data;
                    console.log(data);
                    $state.go('home.contact');
                });
                console.log('fb login' + data.id + ',' + data.name + ' ,'+ data);
            });
        };
        $scope.fakeLogin = function() {
            homeService.fakeLogin();
            loginService.setFakeParseUserData();
            $state.go('home.contact');
        }
    }
})();