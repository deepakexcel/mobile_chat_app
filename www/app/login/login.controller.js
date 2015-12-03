(function() {
    'use strict';

    angular.module('starter')
        .controller('loginController', loginController);

    function loginController($scope, $rootScope, googleLogin, $timeout, $state, facebookLogin) {
        $scope.googleLogin = function() {
            var promise = googleLogin.startLogin();
            promise.then(function(data) {
                $rootScope.user1 = data;
                $state.go('home');

            }, function(data) {
                $scope.googleData = data;
            });
        };
        facebookLogin.timeout();
        $scope.facebookLogin = function() {
            facebookConnectPlugin.login(['public_profile'], function(data) {
                console.log(data);
                self.getData();
            }, function(data) {
                console.log(data);
            });
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