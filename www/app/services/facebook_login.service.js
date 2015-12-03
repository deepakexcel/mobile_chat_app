var facebookLoginService = angular.module('facebookLoginService', ['ngStorage']);
facebookLoginService.factory('facebookLogin', [
    '$http', '$q', '$interval', '$log',
    function($http, $q, $timeout) {
        var service = {};
        service.timeout = function() {
            try {
                if (window.cordova.platformId == "browser") {
                    facebookConnectPlugin.browserInit('547552195393374');
                }
                facebookConnectPlugin.getLoginStatus(function(response) {
                    console.log(response);
                    if (response.status === 'connected') {
                        console.log('User Already LoggedIn');
                        self.getData();
                    } else {
                        console.log('User Not Logged In');
                    }
                }, function() {
                    console.log('Get Login Status Error');
                });
            } catch (e) {
            }
        };
        service.login = function() {
            try {
                facebookConnectPlugin.login(['public_profile'], function(data) {
                    console.log(data);
                }, function(data) {
                    console.log(data);
                });
            } catch (e) {}
        };
        return service;
    }
]);