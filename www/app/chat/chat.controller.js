(function() {
    'use strict';

    angular.module('starter')

    .controller('chatController', chatController);


    function chatController($scope, $stateParams, $localStorage, $rootScope, $state, parseService, homeService, fireBaseService, chatService) {
        var chatUserId = $stateParams.userId;
        var userId = homeService.get('user_id');

        chatService.createGroupChat(userId, chatUserId).then(function(groupId) {
                $scope.groupId = groupId;
                // chatService.chatHistory($scope.groupId).then(function(response) {
                //     console.log(response);
                //     $scope.chatHistory = response; 

                //     },
                //     function() {});
            },
            function() {});

        var myDataRef = fireBaseService.fireBaseIntialize();
        fireBaseService.Initial(myDataRef);
        console.log("Hiii");
        $scope.send = function() {
            chatService.saveChat($scope.groupId, userId, $scope.msg);
            var myDataRef = fireBaseService.fireBaseIntialize();
            fireBaseService.fireBasePush($scope.myDataRef, $localStorage.user_name, this.msg);
            this.msg = " ";
            $scope.msg = '';
        };
    }
})();