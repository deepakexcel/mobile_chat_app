(function() {
    'use strict';
    angular.module('starter')
        .factory('parseService', parseService);

    function parseService(appConfig, $filter) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };
        service.getUserData = function(email) {
            service.parseIntialize();
            var User = Parse.Object.extend("users");
            var User = new User();
            var q2 = new Parse.Query(User);
            q2.notEqualTo("userEmail", email);
            return q2.find({
                success: function(items) {

                }
            });
        };
        service.logOut = function(email) {
            var date = $filter('date')(date, "medium");
            service.parserEvent(date, "offline", "dark", email);

        };
        service.parserResume = function(email) {
            service.parserEvent("Online", "Online", "balanced", email);

        };
        service.parserPause = function(email) {
            var date = $filter('date')(key.lastSeen.iso, "medium");
            service.parserEvent(date, "away", "dark", email);
        };
        service.statusLoginUser = function(email) {
            service.parserEvent("Online", "Online", "balanced", email);
        };
        service.parserEvent = function(date, status, display, email) {
            service.parseIntialize();
            var events = Parse.Object.extend("users");
            var events = new events();
            var query = new Parse.Query(events);
            query.equalTo("userEmail", email);
            query.first({
                success: function(results) {
                    events.save(null, {
                        success: function(events) {
                            events.set("userShow", date);
                            events.set("userStatus", status);
                            events.set("iconColor", display);
                            events.save();
                        }
                    });

                }
            });
        };

        return service;
    }
})();