(function() {
    'use strict';

    angular.module('starter')
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller: 'homeController'
            });
        })
})();