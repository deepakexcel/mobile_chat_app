(function() {
    'use strict';

    angular.module('starter')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                    url: '/home',
                    abstract: true,
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController'
                })
                .state('home.contact', {
                    url: '/contact',
                    views: {
                        'homeContent': {
                            templateUrl: 'app/contact/contact.html',
                            controller: 'contactController'
                        }
                    }
                })
                .state('home.chat', {
                    url: '/chat/:userId',
                    views: {
                        'homeContent': {
                            templateUrl: 'app/chat/chatpage.html',
                            controller: 'chatController'
                        }
                    }
                });
        })
})();