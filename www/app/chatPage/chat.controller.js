(function() {
    'use strict';

    angular.module('starter')

    .controller('chatController', chatController);

    function chatController($scope, $localStorage, $rootScope, $state, parseService, homeService,fireBaseService) {
		$scope.send = function() {
			var myDataRef=fireBaseService.fireBaseIntialize();
            fireBaseService.fireBasePush(myDataRef,$localStorage.user_name,this.msg);
        };
	}
})();