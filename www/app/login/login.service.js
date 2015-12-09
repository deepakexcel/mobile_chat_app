(function() {
    'use strict';
    angular.module('starter')
            .factory('loginService', loginService);

    function loginService(appConfig, $log, homeService,contactService,$localStorage,parseService) {
        var service = {};
        service.parseIntialize = function() {
            Parse.initialize(appConfig.appID, appConfig.jsKey);
        };
        service.setParseUserData = function(userId, userEmail, userName, userPicture) {
            parseService.logInNew(userId, userEmail, userName, userPicture);
                   
        };
        service.setFakeParseUserData = function() {
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
                parseService.loginfakeNew(fakeUser.userId,fakeUser.userEmail,fakeUser.userName,fakeUser.userPicture);
        };

        return service;
    }
})();