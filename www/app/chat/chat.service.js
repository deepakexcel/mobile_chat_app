(function() {
    'use strict';
    angular.module('starter')
        .factory('chatService', chatService);

    function chatService(appConfig, $q) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };

        service.createGroupChat = function(userId, chatUserId) {
            service.parseIntialize();
            var def = $q.defer();
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
                                console.log('New Group Id: ' + group.id);
                                def.resolve(group.id);
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
                                def.resolve(lists[0].objectId);
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
            return def.promise;
        };
        service.saveChat = function(groupId, userId, message) {
            service.parseIntialize();
            var chatMessages = Parse.Object.extend("chatMessages");
            var chat = new chatMessages();
            chat.set("groupChatId", groupId);
            chat.set("userId", userId);
            chat.set("message", message);

            chat.save(null, {
                success: function(chat) {
                    console.log('New object created with objectId: ' + chat.id);
                },
                error: function(chat, error) {
                    console.log('Failed to create new object, with error code: ' + error.message);
                }
            });
        };
        service.chatHistory = function(groupId) {
            service.parseIntialize();
            var def = $q.defer();
            var chatMessages = Parse.Object.extend("chatMessages");
            var chat = new chatMessages();
            var query = new Parse.Query(chat);
            query.equalTo("groupChatId", groupId);
            query.find({
                success: function(results) {
                    var arr = [];
                    arr = JSON.stringify(results);
                    var li = JSON.parse(arr);
                    def.resolve(li);
                },
                error: function(error) {
                    console.log("Error: " + error.code + " " + error.message);
                }
            });
            return def.promise;
        };


        return service;
    }
})();