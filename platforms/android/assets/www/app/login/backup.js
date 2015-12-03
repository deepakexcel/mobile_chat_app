(function() {
    'use strict';

    angular.module('starter')
            .controller('loginController', loginController);
    function loginController($scope,$rootScope, googleLogin, $timeout, $state) {
        $scope.googleLogin = function() {
            var promise = googleLogin.startLogin();
            promise.then(function(data) {
                $rootScope.user=data;
                $state.go('home');
                
            }, function(data) {
                $scope.googleData = data;
            });
        };

        $timeout(function() {
            
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
            }
            catch (e) {

            }
        }, 1000);
        $scope.facebookLogin = function() {
            console.log("yes");

            facebookConnectPlugin.login(['public_profile'], function(data) {
                console.log(data);
                self.getData();

            }, function(data) {
                console.log(data);

            });
        };
        self.getData = function() {
            facebookConnectPlugin.api('/me', ['public_profile'], function(data) {
                console.log(data);
                $scope.$apply(function() {
                    $scope.fb_data = data;
                    $scope.user=$scope.fb_data;
                    console.log(data);
                    $state.go('home');
                    
                });

                console.log('fb login' + data.id + ',' + data.name);
            });
        };
    }
})();