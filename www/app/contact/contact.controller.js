 (function() {
    'use strict';

    angular.module('starter')

    .controller('contactController', contactController);

    function contactController($scope, $rootScope, $state, $localStorage, $timeout, parseService, homeService,contactService) {

        $scope.onTimeout = function() {
            parseService.getUserData($localStorage.user_email).then(function(data) {

                var arr = [];
                arr = JSON.stringify(data);
                var lists = JSON.parse(arr);
                $scope.lists = lists;
                $scope.$apply($scope.lists);
                contactService.updateStatus(lists);
                contactService.statusUser($localStorage.user_email);
            });

            $scope.date = new Date();
            $timeout($scope.onTimeout, 10000);
        }

        $timeout($scope.onTimeout, 1000);
    }
})();