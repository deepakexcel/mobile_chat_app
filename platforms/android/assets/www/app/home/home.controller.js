(function() {
    'use strict';

    angular.module('starter')
            .controller('homeController', homeController);
    function homeController($scope,$state, googleLogin) {
//        var promise = googleLogin.startLogin();
//        promise.then(function(data) {
//            $scope.googleData = data;
//        }, function(data) {
//            $scope.googleData = data;
//            $state.go('/');
//        });
    }
})();