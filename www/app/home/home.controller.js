(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin) {
        Parse.initialize("028aHh8C4DIPmPkE7mt505yeeUGFm6DtWFgH9pUY", "xQvPBzwOHswmTxPRWhgd5pUU3DREU1AtS3cBTJns");
        var q2 = new Parse.Query(Parse.User);
        q2.find({
            success: function(items) {
                var strin = [];
                console.log(items.length);
                for (var i = 0; i < items.length - 1; i++) {
                    strin[i] = items[i];
                }
                var arr = [];
                arr = JSON.stringify(strin);
                $scope.lists = JSON.parse(arr);
                $scope.$apply();
                console.log($scope.lists);
            }
        });
        console.log($scope.lists);
    }
})();