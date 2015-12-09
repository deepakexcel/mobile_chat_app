(function() {
    'use strict';
    angular.module('starter')
        .factory('fireBaseService', fireBaseService);

    function fireBaseService(appConfig, $filter, $q, $ionicScrollDelegate, $timeout) {
        var service = {};
        var def = $q.defer();
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
            });
        };
        service.Initial = function(myDataRef) {
            var myDataRef = service.fireBaseIntialize();
            myDataRef.on("child_added", function(snapshot) {
                var message = snapshot.val();
                service.displayChatMessage(message.name, message.text);
            }, function(errorObject) {
                console.log("The read failed: " + errorObject.code);
            });

        };

        var list = [];
        service.displayChatMessage = function(name, text) {
            $timeout(function() {
                $ionicScrollDelegate.scrollBottom(true);
            });
            var myEl = angular.element(document.querySelector('#divID'));
            if (name == "Ujjwal kaushik") {
                myEl.append('<div style="float:left; clear:both;"><img class="avatar" src="http://lorempixel.com/640/480/abstract/"><div class="bubble"><p><b>' + name + '</b></p><p>' + text + '</p></div>');
            } else {
                myEl.append('<div style="float:right; clear:both;"><div class="bubble1"><p><b>' + name + '</b></p><p>' + text + '</p></div>&nbsp;&nbsp;&nbsp;&nbsp;<div style="float:right"><img class="avatar" src="http://lorempixel.com/640/480/abstract/"></div>');
            }
        };


        return service;
    }
})();