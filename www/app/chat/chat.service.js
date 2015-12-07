(function() {
    'use strict';
    angular.module('starter')
        .factory('chatService', chatService);

    function chatService(appConfig) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };

        service.createGroupChat = function(userId, chatUserId) {
            service.parseIntialize();
            var groupChat = Parse.Object.extend("groupChat");
            var group = new groupChat();
            var query = new Parse.Query(group);
            var userIds = [userId, chatUserId];
            query.containsAll("userIds", userIds);
            query.find({
                success: function(results) {
                    console.log(results.length);
                    if (results.length == 0) {
                        group.set("userIds", userIds);
                        group.save(null, {
                            success: function(group) {
                                console.log('New Group Id: '+group.id);
                            },
                            error: function(group, error) {
                                $log.error('Failed to create new object, with error code: ' + error.message);
                            }
                        });
                    } else {
                        query.containsAll("userIds", userIds);
                        query.find({
                            success: function(results) {

                                var arr = [];
                                arr = JSON.stringify(results);
                                var lists = JSON.parse(arr);
                                console.log('Current Group Id: ' + lists[0].objectId);
                            },
                            error: function(error) {
                                alert("Error: " + error.code + " " + error.message);
                            }
                        });
                    }

                },
                error: function(error) {
                    alert("Error: " + error.code + " " + error.message);
                }
            });

        };


        return service;
    }
})();