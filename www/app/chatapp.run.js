(function() {
    'use strict';
    angular.module('starter', ['ionic', 'GoogleLoginService', 'facebookLoginService', 'ngStorage'])
        .run(function($ionicPlatform, userValidate, $rootScope, parseService, $state) {
            $rootScope.$on('$stateChangeSuccess',
                function(event, toState, toParams, fromState, fromParams) {
                    userValidate.validUser(toState.name);
                }
            )
            $ionicPlatform.on('resume', function() {
                eventService.resumeEvent();
            });
            $ionicPlatform.on('pause', function() {
                eventService.pauseEvent();
            });
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

})();