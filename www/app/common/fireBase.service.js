(function() {
    'use strict';
    angular.module('starter')
        .factory('fireBaseService', fireBaseService);

    function fireBaseService(appConfig, $filter) {
        var service = {};

        service.fireBaseIntialize = function() {
            var myDataRef = new Firebase('https://chatappverson1.firebaseio.com/');
            return myDataRef;
        };

        service.fireBasePush = function(myDataRef, name, msg) {

            service.fireBaseIntialize();

            myDataRef.push({
                name: name,
                text: msg
            });

            myDataRef.on('child_added', function(snapshot) {
                var message = snapshot.val();
                service.displayChatMessage(message.name, message.text);
            });

        };

        service.displayChatMessage = function(name, text) {
            var myEl = angular.element(document.querySelector('#divID'));
            myEl.append('<ul class="list"><li class="item">' + name + ' : ' + text + '<br/></li></ul>');
        };

        return service;
    }
})();