(function() {
    'use strict';

    angular.module('starter', ['ionic', 'GoogleLoginService','facebookLoginService', 'ngStorage'])
        .run(function($ionicPlatform, userValidate) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
                userValidate.validUser();
            });
        })
        
        
})();