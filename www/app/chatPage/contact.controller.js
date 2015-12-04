(function() {
    'use strict';

    angular.module('starter')

            .controller('contactController', contactController);

    function contactController($scope, $rootScope, $state, parseService, homeService) {
        $scope.chatUser = function(chatUser){
            alert(chatUser);
        }
    }
})();