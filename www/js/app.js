// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic',
  'starter.controllers',
  'starter.services',
  'starter.LoginService'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($ionicConfigProvider) {
$ionicConfigProvider.backButton.text('Go Back').icon('ion-chevron-left');
$ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
$ionicConfigProvider.tabs.position("bottom"); //Places them at the bottom for all OS
$ionicConfigProvider.tabs.style("standard"); //Makes them all look the same across all OS
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('login', {
      url: '/login',
      templateUrl: 'templates/sign/startLogin.html',
      controller: 'LoginCtrl'
    })

    .state('signUP', {
      url: '/signUP',
      templateUrl: 'templates/sign/signUpPage.html',
      controller: 'signUpCtrl'
    })


     .state('confirmEmail', {
    url: '/confirmEmail',
    templateUrl: 'templates/sign/confEmail.html',
    controller: 'ConfirmEmailCtrl'
    
  })
  .state('selectInterest', {
      url: '/selectInterest',
      templateUrl: 'templates/sign/selectInterest.html'
    })


  .state('neighbor', {
      url: '/neighbor',
      templateUrl: 'templates/sign/neighbor.html'
    })


     .state('app.main', {
    url: '/main',
    views: {
      'menuContent': {
        templateUrl: 'templates/main/main.html',
        controller: 'rcmdBooksCtrl'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/main/search.html'
      }
    }
  })


     .state('app.newsFeed', {
      url: '/newsFeed',
      views: {
        'menuContent': {
          templateUrl: 'templates/main/newsFeed.html',
          controller: 'newsFeedsCtrl'
        }
      }
    })

        .state('app.test', {
      url: '/test',
      views: {
        'menuContent': {
          templateUrl: 'data/login.php'
        }
      }
    })




     .state('app.detailBook', {
      url: '/main/:rcmdBookId' ,
      views: {
        'menuContent': {
          templateUrl: 'templates/detailBook.html',
          controller: 'DetailBookCtrl'
        }
      }
    })

      .state('app.myLibrary', {
      url: '/myLibrary',
      views: {
        'menuContent': {
          templateUrl: 'templates/main/myLibrary.html',
          controller: 'rcmdBooksCtrl'
        }
      }
    })

    .state('app.notifyPage', {
      url: '/notifyPage',
      views: {
        'menuContent': {
          templateUrl: 'templates/notifyPage.html',
          controller:  'NotifyCtrl'
        }
      }
    })
      .state('app.myPage', {
      url: '/myPage',
      views: {
        'menuContent': {
          templateUrl: 'templates/sign/myPage.html',
        }
      }
    })


     .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/main/setting.html',
        }
      }
    })



    .state('app.notifyDetail', {
      url: '/notifyPage',
      views: {
        'menuContent': {
          templateUrl: 'templates/notifyDetailPage.html',
          controller:  'NotifyDetailCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  //$urlRouterProvider.otherwise('/app/playlists');
  $urlRouterProvider.otherwise('/login');
});
