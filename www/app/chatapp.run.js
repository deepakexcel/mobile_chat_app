(function() {
    'use strict';
    angular.module('starter', ['ionic', 'GoogleLoginService','facebookLoginService', 'ngStorage'])
        .run(function($ionicPlatform, userValidate,$rootScope, parseService) {
        //     $ionicPlatform.on('resume', function(){
        // parseService.pauseEvent();
        // //console.log("pause event");
        //     });
        //     $ionicPlatform.on('pause', function(){
        // parseService.pauseEvent();
        // //console.log("pause event");
        //     });
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
                 // userValidate.validUser();
             });
        })
        
})();