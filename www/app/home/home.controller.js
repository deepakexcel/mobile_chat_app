(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin, parseService) {

        parseService.getUserData().then(function(data) {
            var arr = [];
            arr = JSON.stringify(data);
            var lists = JSON.parse(arr);
            $scope.lists = lists;
            $scope.$apply();
        });
    }
})();