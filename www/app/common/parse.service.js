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
            service.parseIntialize();
            var update = Parse.Object.extend("users");
            var update = new update();
            var query = new Parse.Query(update);
            query.equalTo("userEmail", email);
            query.first({
                success: function(update) {
                    update.save(null, {
                        success: function(update) {
                            date = new Date();
                            var date = $filter('date')(date, "medium");
                            update.set("userStatus", "offline");
                            update.set("iconColor", "dark");
                            update.set("userShow", date);
                            update.save();
                        }
                    });
                }
            });

        };

        return service;
    }
})();