(function() {
    'use strict';
    angular.module('starter')
        .factory('contactService', contactService);
    function contactService(appConfig, $filter, parseService) {
        var service = {};
        service.statusLoginUser = function(email) {
            //console.log(email);
            parseService.statusLoginUser("Online", "Online", "balanced", email);
        };
        return service;
    }
})();