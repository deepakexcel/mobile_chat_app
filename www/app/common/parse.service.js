(function() {
    'use strict';
    angular.module('starter')
        .factory('parseService', parseService);

    function parseService() {
        var service = {};

        service.getUserData = function(data) {
            Parse.initialize("028aHh8C4DIPmPkE7mt505yeeUGFm6DtWFgH9pUY", "xQvPBzwOHswmTxPRWhgd5pUU3DREU1AtS3cBTJns");
            var q2 = new Parse.Query(Parse.User);
            return q2.find({
                success: function(items) {

                }
            });
        };
        return service;
    }
})();