(function() {
    'use strict';
    angular.module('starter')
        .factory('contactService', contactService);

    function contactService(appConfig, $filter) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };

        service.updateDisplay = function(color, status, email) {
            service.parseIntialize();
            var update = Parse.Object.extend("users");
            var update = new update();
            var query = new Parse.Query(update);
            query.equalTo("userEmail", email);
            query.first({
                success: function(update) {
                    update.save(null, {
                        success: function(update) {
                            update.set("userShow",status);
                            update.set("iconColor",color);

                            update.save();
                        }
                    });
                }
            });
        };
        service.statusUser = function(email) {
            service.updateUser("Online", "Online", "balanced", email);
        };
        service.updateStatus = function(data) {
            var arr = [];
            arr = JSON.stringify(data);
            var lists = JSON.parse(arr);
            return _.each(lists, function(key, value) {
                if (key.userStatus == "Online") {

                    service.updateDisplay("balanced", key.UserStatus, key.userEmail);

                } else {
                    var date = $filter('date')(key.lastSeen.iso, "medium");
                    service.updateDisplay("dark", date, key.userEmail);
                }
            });

        };
        service.updateUser = function(status, show, display, email) {
            service.parseIntialize();
            var update = Parse.Object.extend("users");
            var update = new update();
            var query = new Parse.Query(update);
            query.equalTo("userEmail", email);
            query.first({
                success: function(update) {
                    update.save(null, {
                        success: function(update) {
                            update.set("userStatus", status);
                            update.set("userShow", show);
                            update.set("iconColor", display);

                            update.save();
                        }
                    });
                }
            });
        };
        return service;
    }
})();