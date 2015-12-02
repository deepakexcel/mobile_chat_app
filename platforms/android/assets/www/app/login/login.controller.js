(function() {
    'use strict';

    angular.module('starter')
            .controller('loginController', loginController);
    function loginController($scope, googleLogin, $timeout, $state) {
        $scope.googleLogin = function() {
            var promise = googleLogin.startLogin();
            promise.then(function(data) {
                $scope.googleData = data;
                $state.go('home');
            }, function(data) {
                $scope.googleData = data;
            });
        };

        $timeout(function() {
            //timeout requried to wait for facebook plugin file to load
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
                    console.log(data);

                });

                console.log('fb login' + data.id + ',' + data.name);
            });
        };

        $scope.logout = function() {
            try {
                if (window.cordova) {
                    facebookConnectPlugin.getLoginStatus(function(fbUserObject) {

                        console.log("FB success");
                        console.log(fbUserObject.status);
                        if (fbUserObject.status === 'connected') {
                            facebookConnectPlugin.logout(
                                    function() {


                                    },
                                    function() {
                                    });
                        }

                    }, function(errorObj) {
                        console.log("FB failed" + errorObj);
                    });
                }
                else {
                    facebookConnectPlugin.getLoginStatus(function(response) {
                        if (response.status === 'connected') {
                            facebookConnectPlugin.logout(function(response) {
                                // user is now logged out
                            });
                        }
                    });

                }
            }
            catch (e) {

            }

        }
    }
})();