 (function() {
    'use strict';
    angular.module('starter')
            .factory('loginService', loginService);

    function loginService(appConfig, $log) {
        var date = new Date();
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };
        service.setParseUserData = function(userId, userEmail, userName, userPicture) {
            service.parseIntialize();
            var users = Parse.Object.extend("users");
            var query = new Parse.Query(users);
            query.equalTo("userEmail", userEmail);
            query.find({
                success: function(results) {
                    if (results.length == 0) {
                        var user = new users();
                        user.set("userId", userId);
                        user.set("userEmail", userEmail);
                        user.set("userName", userName);
                        user.set("userPicture", userPicture);
                        user.set("iconColor", "balanced");
                        user.set("userShow", "Online");
                        user.set("userStatus","Online");
                        user.save(null, {
                            success: function(user) {
                            },
                            error: function(user, error) {
                                $log.error('Failed to create new object, with error code: ' + error.message);
                            }
                        });
                    }

                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });
        };
        service.setFakeParseUserData = function() {
            service.parseIntialize();
            var users = Parse.Object.extend("users");
            var user = new users();
            user.set("userId", faker.random.uuid());
            user.set("userEmail", faker.internet.email());
            user.set("userName", faker.name.findName());
            user.set("userPicture", faker.image.avatar());
            user.set("lastSeen", date);
            user.save(null, {
                success: function(user) {
                },
                error: function(user, error) {
                    $log.error('Failed to create new object, with error code: ' + error.message);
                }
            });

        };

        return service;
    }
})();