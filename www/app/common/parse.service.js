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
            var User = Parse.Object.extend("users");
            var User = new User();
            var q2 = new Parse.Query(User);
            return q2.find({
                success: function(items) {
                }
            });
        };
        service.lastSeenUpdate = function(email, date) {
            service.parseIntialize();
            var LastSeen = Parse.Object.extend("users");
            var LastSeen = new LastSeen();
            var query = new Parse.Query(LastSeen);
            query.equalTo("userEmail", email);
            query.first({
                            success: function (LastSeen) {
                                LastSeen.save(null, {
                                    success: function (LastSeen) {
                                        
                                        LastSeen.set("lastSeen", date);
                                        
                                            LastSeen.save();
                                        
                                    }
                                });

                            }
                        });

        };

        return service;
    }
})();