(function() {
    'use strict';

    angular.module('starter')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('home', {
                    url: '/home',
                    abstract: true,
                    cache: false,
                    templateUrl: 'app/home/home.html',
                    controller: 'homeController'
                })
                .state('home.contact', {
                    url: '/contact',
                    cache: false,
                    views: {
                        'homeContent': {
                            templateUrl: 'app/contact/contact.html',
                            controller: 'contactController'
                        }
                    }
                })
                .state('home.chat', {
                    url: '/chat/:userId',
                    cache: false,
                    views: {
                        'homeContent': {
                            templateUrl: 'app/chat/chatpage.html',
                            controller: 'chatController'
                        }
                    }
                });
        })

})();