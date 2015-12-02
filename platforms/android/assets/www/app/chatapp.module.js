(function() {
    'use strict';

    angular.module('starter', ['ionic', 'GoogleLoginService'])
        .run(function($ionicPlatform) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });
        })
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/')

            $stateProvider.state('login', {
                url: '/',
                templateUrl: 'app/login/login.html',
                controller: 'loginController'
            })
            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'app/home/home.html',
                controller: 'homeController'
            });
        })
})();