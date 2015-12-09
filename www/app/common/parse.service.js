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
            q2.ascending("userShow");
            q2.notEqualTo("userEmail", email);
            return q2.find({
                success: function(items) {

                }
            });
        };
        service.logOut = function(email) {
            var date = $filter('date')(new Date(),'medium');
            var string = "Last seen " + date;

            service.parserEvent(string, "offline", "dark", email);

        };
        service.logIn = function(email) {
            service.parserEvent("Online", "Online", "balanced", email);

        };

        service.parserResume = function(email) {
            service.parserEvent("Online", "Online", "balanced", email);
            console.log("Resume");

        };
        service.parserPause = function(email) {
            console.log("Pause");
            var date = $filter('date')(new Date(),'medium');
            var string = "Last seen " + date;
            service.parserEvent(string, "away", "dark", email);
        };
        service.statusLoginUser = function(email) {
            console.log(email);
            service.parserEvent("Online", "Online", "balanced", email);
        };
        service.parserEvent = function(date, status, display, email) {

            service.parseIntialize();
            var users = Parse.Object.extend("users");
            var query = new Parse.Query(users);
            query.equalTo("userEmail", email);
            query.first({
                success: function(users) {
                    users.save(null, {
                        success: function(users) {
                            users.set("userStatus", status);
                            users.set("userShow", date);
                            users.set("iconColor", display);
                            users.save();

                        }
                    });

                }
            });
        };
        service.logInNew = function(userId, userEmail, userName, userPicture) {
            service.parseIntialize();
            var users = Parse.Object.extend("users");
            var query = new Parse.Query(users);
            query.equalTo("userEmail", userEmail);
            query.find({
                success: function(results) {
                    if (results.length == 0) {
                        service.loginNew(userId, userEmail, userName, userPicture);
                    } else {
                        service.logIn(userEmail);
                    }

                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });

        };
        service.loginfakeNew = function(userId, userEmail, userName, userPicture) {
            service.loginNew(userId, userEmail, userName, userPicture);
        };
        service.loginNew = function(userId, userEmail, userName, userPicture) {
            var date= new Date();
            service.parseIntialize();
            var users = Parse.Object.extend("users");
            var user = new users();
            user.set("userId", userId);
            user.set("userEmail", userEmail);
            user.set("userName", userName);
            user.set("userPicture", userPicture);
            user.set("lastSeen", date);
            user.set("userStatus", "Online");
            user.set("userShow", "Online");
            user.set("iconColor", "balanced");
            user.set("userDisplay", "assertive");
            user.save(null, {
                success: function(user) {},
                error: function(user, error) {
                    $log.error('Failed to create new object, with error code: ' + error.message);
                }
            });
        };
        return service;
    }
})();