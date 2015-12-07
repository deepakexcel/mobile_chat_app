(function() {
    'use strict';

    angular.module('starter')

            .controller('chatController', chatController);

    function chatController($scope, $stateParams, homeService, chatService, $state) {
        $scope.chatUserId = $stateParams.userId;
        $scope.userId = homeService.get('user_id');
        chatService.createGroupChat($scope.userId,$scope.chatUserId);
    }
})();