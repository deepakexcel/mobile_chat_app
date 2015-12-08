(function() {
    'use strict';
    angular.module('starter')
        .factory('fireBaseService', fireBaseService);

    function fireBaseService(appConfig, $filter) {
        var service = {};

        service.fireBaseIntialize = function() {
            var myDataRef = new Firebase(appConfig.firebaseId);
            return myDataRef;
        };

        service.fireBasePush = function(myDataRef, name, msg) {

            var myDataRef = service.fireBaseIntialize();

            myDataRef.push({
                name: name,
                text: msg
            });
            myDataRef.on('child_added', function(snapshot) {
                var message = snapshot.val();
                service.displayChatMessage(message.name, message.text);
            });
        };
        service.Initial = function(myDataRef) {

            var myDataRef = service.fireBaseIntialize();

            myDataRef.push({

            });
            myDataRef.on('child_added', function(snapshot) {
                var message = snapshot.val();
                service.displayChatMessage(message.name, message.text);
            });
        };

        service.displayChatMessage = function(name, text) {
            var myEl = angular.element(document.querySelector('#divID'));
            if (name == "Ujjwal kaushik") {
                console.log(name);
                myEl.prepend('<div style="float:left"><img class="avatar" src="http://lorempixel.com/640/480/abstract/"><div class="bubble"><p><b>' + name + '</b></p><p>' + text + '</p></div>');
            } else {
                myEl.prepend('<div style="float:right"><div class="bubble1"><p><b>' + name + '</b></p><p>' + text + '</p></div>&nbsp;&nbsp;&nbsp;&nbsp;<div style="float:right"><img class="avatar" src="http://lorempixel.com/640/480/abstract/"></div>');
            }
        };

        return service;
    }
})();