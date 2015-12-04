(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, $timeout, googleLogin, parseService) {

        $scope.onTimeout = function() {
            parseService.getUserData().then(function(data) {
                var arr = [];
                arr = JSON.stringify(data);
                var lists = JSON.parse(arr);
                $scope.lists = lists;
                
                $scope.$apply($scope.lists);
                
                
            });
            $scope.date = new Date();
           	parseService.lastSeenUpdate($scope.googleUser.email,$scope.date);
            $timeout($scope.onTimeout, 10000);
        }
			
        $timeout($scope.onTimeout, 1000);

    }
})();