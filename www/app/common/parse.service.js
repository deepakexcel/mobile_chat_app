(function() {
    'use strict';
    angular.module('starter')
        .factory('parseService', parseService);

    function parseService(appConfig) {
        var service = {};
        service.parseIntialize = function() {
           Parse.initialize(appConfig.appID, appConfig.jsKey);
        };
        service.getUserData = function() {
            service.parseIntialize();
            var q2 = new Parse.Query(Parse.User);
            return q2.find({
                success: function(items) {
                    

                }
            });
        };
        
        return service;
    }
})();