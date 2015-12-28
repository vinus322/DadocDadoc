angular.module('app.routes', [])

    .config(function($ionicConfigProvider) {
        $ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
        $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
        $ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('app', {
                url: '/app',
                abstract: true,
                templateUrl: 'templates/main/menu.html',
                controller: 'menuCtrl'
            })

            .state('signin', {
                url: '/users/signin',
                templateUrl: 'templates/users/signin.html',
                controller: 'signinCtrl'
            })

            .state('signup', {
                url: '/users/signup',
                templateUrl: 'templates/users/signup.html',
                controller: 'signupCtrl'
            })

            .state('verify', {
                url: '/users/verify',
                templateUrl: 'templates/users/verify.html',
                controller: 'verifyCtrl',
                params: {
                    user_id: "",
                    password: "",
                    name: "",
                    email: "",
                    birth: "",
                    gender: "",
                    phone: ""
                }
            })

            .state('selectInterest', {
                url: '/users/selectInterest',
                templateUrl: 'templates/users/selectInterest.html',
                controller: 'selectInterestCtrl'
            })

            .state('neighbor', {
                url: '/users/neighbor',
                templateUrl: 'templates/users/neighbor.html',
                controller: 'neighborCtrl'
            })

            .state('app.main', {
                url: '/main/main',
                views: {
                    menuContent: {
                        templateUrl: 'templates/main/main.html',
                        controller: 'mainCtrl'
                    }
                }
            })

            .state('app.myLibrary', {
                url: '/main/myLibrary',
                views: {
                    menuContent: {
                        templateUrl: 'templates/main/myLibrary.html',
                        controller: 'mainCtrl'
                    }
                }
            })

            .state("app.newsFeed", {
                url: "/main/newsFeed",
                views: {
                    menuContent: {
                        templateUrl: 'templates/main/newsFeed.html',
                        controller: 'newsFeedCtrl'
                    }
                }
            })

            .state('app.setting', {
                url: '/main/setting',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/main/setting.html',
                        controller: 'settingCtrl'
                    }
                }
            })

            .state('app.search', {
                url: '/main/search',
                views: {
                    menuContent: {
                        templateUrl: 'templates/main/search.html',
                        controller: 'searchCtrl'
                    }
                }
            })

            .state('app.myPage', {
                url: '/users/myPage',
                views: {
                    menuContent: {
                        templateUrl: 'templates/users/myPage.html',
                        controller: 'myPageCtrl'
                    }
                }
            })

            .state('app.detailBook', {
                url: '/book/detailBook/:rcmdBookId',
                views: {
                    menuContent: {
                        templateUrl: 'templates/book/detailBook.html',
                        controller: 'detailBookCtrl'
                    }
                }
            })

            .state('app.notifyPage', {
                url: '/main/notifyPage',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/main/notifyPage.html',
                        controller: 'notifyCtrl'
                    }
                }
            })

            .state('app.notifyDetail', {
                url: '/main/notifyPage/:notifyid',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/main/notifyDetailPage.html',
                        controller: 'notifyDetailCtrl'
                    }
                }
            })

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/users/signin');
    });
