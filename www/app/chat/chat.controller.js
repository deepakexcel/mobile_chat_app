(function() {
    'use strict';

    angular.module('starter')

    .controller('chatController', chatController);

    function chatController($scope, $localStorage, $rootScope, $state, parseService, homeService, fireBaseService) {
        var myDataRef = fireBaseService.fireBaseIntialize();
        fireBaseService.Initial(myDataRef);
        console.log("Hiii");
        $scope.send = function() {

            var myDataRef = fireBaseService.fireBaseIntialize();
            fireBaseService.fireBasePush($scope.myDataRef, $localStorage.user_name, this.msg);
            this.msg = " ";
        };
    }
})();