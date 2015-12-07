(function() {
    'use strict';
    angular.module('starter')
        .factory('eventService', eventService);

    function eventService($localStorage, appConfig) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };
        service.resumeEvent = function() {
            var email = $localStorage.user_email;
            service.parseIntialize();
            var resume = Parse.Object.extend("users");
            var resume = new resume();
            var query = new Parse.Query(resume);
            query.equalTo("userEmail", email);
            query.first({
                success: function(resume) {
                    resume.save(null, {
                        success: function(resume) {
                            resume.set("userShow", "Online");
                            resume.set("userStatus", "Online");
                            resume.set("iconColor", "balanced");
                            resume.save();
                        }
                    });

                }
            });
        };
        service.pauseEvent = function() {
            if($localStorage.user_email)
            {
            var email = $localStorage.user_email;
            service.parseIntialize();
            var pause = Parse.Object.extend("users");
            var pause = new pause();
            var query = new Parse.Query(pause);
            query.equalTo("userEmail", email);
            query.first({
                success: function(pause) {
                    pause.save(null, {
                        success: function(pause) {
                            var date = $filter('date')(key.lastSeen.iso, "medium");
                            pause.set("userShow", date);
                            pause.set("userStatus", "away");
                            pause.set("iconColor", display);
                            pause.save();
                        }
                    });

                }
            });
        }
        
        };

        return service;
    }
})();