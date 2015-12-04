(function() {
    'use strict';

    angular.module('starter')

            .controller('contactController', contactController);

    function contactController($scope, $rootScope, $state, parseService, homeService) {
        parseService.getUserData().then(function(data) {
            var arr = [];
            arr = JSON.stringify(data);
            var lists = JSON.parse(arr);
            $scope.lists = lists;
            $scope.$apply();
        });
        $scope.chatUser = function(chatUser) {
            alert(chatUser);
            $scope.singlechatUser = chatUser;
            $state.go('home.chat');
        }
    }
})();