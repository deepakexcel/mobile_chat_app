(function() {
    'use strict';
    angular.module('starter')
            .factory('loginService', loginService);

    function loginService(appConfig, $log, homeService) {
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
                        user.set("lastSeen", date);
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
            var fakeUser = {
                      userId: faker.random.uuid(),
                      userEmail: faker.internet.email(),
                      userName: faker.name.findName(),
                      userPicture: faker.image.abstract()
                    };
                homeService.set('user_name', fakeUser.userName);
                homeService.set('user_id', fakeUser.userId);
                homeService.set('user_email', fakeUser.userEmail);
                homeService.set('user_picture', fakeUser.userPicture);
            user.set("userId", fakeUser.userId);
            user.set("userEmail", fakeUser.userEmail);
            user.set("userName", fakeUser.userName);
            user.set("userPicture", fakeUser.userPicture);
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