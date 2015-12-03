(function() {
    'use strict';

    angular.module('starter')
        .controller('homeController', homeController);

    function homeController($scope, $state, googleLogin) {
        $scope.lists = [{
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }, {
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }, {
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }, {
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }, {
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }, {
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        },{
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        },{
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        },{
            "name": "User",
            "image": "img/avatar.jpg",
            "msg": "Hii !! How Are You"
        }];
    }
})();