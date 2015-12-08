(function() {
    'use strict';

    angular.module('starter')

    .controller('homeController', homeController);

    function homeController($scope, $rootScope, $state, googleLogin, $localStorage, parseService, homeService, userValidate) {
        $scope.userName = homeService.get('user_name');
        $scope.userPicture = homeService.get('user_picture');
<<<<<<< HEAD
        $scope.logout = function() {
            console.log($localStorage.user_email);
            parseService.logOut($localStorage.user_email);
            homeService.removeAll();
            $state.go('login');
=======
        $scope.logout = function(){
        	parseService.logOut($localStorage.user_email);
            facebookConnectPlugin.logout(function(){
            console.log('logout');
        	homeService.removeAll();
        	$state.go('login');
>>>>>>> edb726cf842520380cd2808b5ac2c7efff9ae080
        }
    }
})();