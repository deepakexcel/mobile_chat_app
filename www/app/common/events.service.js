(function() {
    'use strict';
    angular.module('starter')
        .factory('eventService', eventService);

    function eventService($localStorage, appConfig, parseService) {
        var service = {};
        service.resumeEvent = function() {
            var email = $localStorage.user_email;
            parseService.parserResume(email);

        };
        service.pauseEvent = function() {
            if ($localStorage.user_email) {
                var email = $localStorage.user_email;
                service.parseIntialize();
                parseService.parsePause(email);
            }
        };
        return service;
    }
})();