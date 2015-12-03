(function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $rootScope, googleLogin, $timeout, $state, facebookLogin, homeService) {
        $scope.googleLogin = function() {
            var promise = googleLogin.startLogin();
            promise.then(function(data) {
                $rootScope.googleUser = data;
                homeService.set('user_id',$rootScope.googleUser.google_id);
                homeService.set('user_email',$rootScope.googleUser.email);
                homeService.set('user_name',$rootScope.googleUser.name);
                homeService.set('user_picture',$rootScope.googleUser.picture);
                $state.go('home');
            }, function(data) {
                $scope.googleUser = data;
            });
        };
        facebookLogin.timeout();
         $scope.facebookLogin = function() {
            facebookLogin.login();
            self.getData();
        };
        self.getData = function() {
            facebookConnectPlugin.api('/me', ['public_profile'], function(data) {
                console.log(data);
                $scope.$apply(function() {
                    $rootScope.user = data;
                    console.log(data);
                    $state.go('home');
                });
                console.log('fb login' + data.id + ',' + data.name);
            });
        };
    }
})();