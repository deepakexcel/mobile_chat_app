(function() {
    'use strict';

    angular.module('starter')
        
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')

            $stateProvider.state('login', {
                url: '/',
                cache: false,
                templateUrl: 'app/login/login.html',
                controller: 'loginController'
            });
            
        })
})();