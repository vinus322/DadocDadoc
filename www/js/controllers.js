angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal,$ionicPopup, $timeout, userData) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal


  $scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input ng-model="data.pop">',
    title: 'comment',
    subTitle: '간단한 코멘트를 입력하세요',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>ok</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.pop) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.pop;
          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);

 };

 $scope.UserData = userData.get();
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  .controller ('LoginCtrl', function($scope,startLogin,$http,$ionicPopup,$state) {

    $scope.errors = [];
    $scope.msgs = [];
    $scope.data ={};
    $scope.temp;

    $scope.Login = function() {
    //  $scope.errors.splice(0, $scope.errors.length); // remove all error messages
     // $scope.msgs.splice(0, $scope.msgs.length);
     startLogin.loginUser($scope.data.userid,$scope.data.password).success(function(data) {
         var alertPopup = $ionicPopup.alert({
          title: 'Login success!',
          template: 'Welcome ' + $scope.data.userid + '!'
        });
     

        $state.go('app.main');
      }).error(function(data) {
         var alertPopup = $ionicPopup.alert({
           title: 'Login failed!',
           template: 'Please check your credentials!'
         });
      });
    }
  })

.controller('ConfirmEmailCtrl', function( $state,$scope,confirmEmail,userData,$ionicPopup) {
    $scope.UserData =  userData.get();

  $scope.confirmPopup= function() {
       $scope.confirm = {}
      var confirmEmail  = $ionicPopup.show({
      template: '<input ng-model="confirm.pop">',
      title: 'email',
      subTitle: '인증코드를 입력하세요',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>ok</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.confirm.pop) {
              //don't allow the user to close unless he enters wifi password
              e.preventDefault();
            } else {
              $state.go('selectInterest');
              return $scope.confirm.pop;
            }
          }
        }
      ]
    });
        confirmPopup.then(function(res) {
          if(res)
            $state.go('selectInterest');

          console.log('Tapped!', res);
        });
        $timeout(function() {
           myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    }

    $scope.EmailPopup= function() {
       $scope.edit = {}
      var editEmail  = $ionicPopup.show({
      template: '<input ng-model="edit.pop">',
      title: 'email',
      subTitle: '수정할 이메일을 입력하세요',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>ok</b>',
          type: 'button-positive',
          onTap: function(e) {
            if (!$scope.edit.pop) {
              e.preventDefault();
            } else {
             
              $scope.UserData.email = $scope.edit.pop;
              return $scope.edit.pop;
            }
          }
        }
      ]
    });
        editEmail.then(function(res) {
          
          console.log('Tapped!', res);
        });
        $timeout(function() {
           myPopup.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    }

})

.controller('newsFeedsCtrl', function($scope,newsFeeds) {
   $scope.newsfeeds = newsFeeds.all();
})

.controller('newsFeedCtrl', function($scope, $stateParams) {
})

.controller('rcmdBooksCtrl', function($scope,rcmdBooks) {
   $scope.rcmdbooks = rcmdBooks.all();
})

.controller('DetailBookCtrl', function($scope, $stateParams,rcmdBooks) {
  $scope.rcmdbook = rcmdBooks.get($stateParams.rcmdBookId);
})

.controller('NotifyCtrl', function($scope) {
  $scope.notifyLists = [
    { contents: '한수호님이 회원님의 서재를 구독하기 시작하였습니다.', date : "2015-02-12", id: 1 },
    { contents: 'cowbell에게서 메세지가 도착하였습니다.', date : "2015-03-22", id: 2 },
    { contents:'event가 발생하였습니다.', date : "2015-04-01", id: 3 },
    { contents: 'event가 발생하였습니다.', date : "2015-05-12", id: 4 },
    { contents: 'event가 발생하였습니다.', date : "2015-02-12", id: 5 },
    { contents:'event가 발생하였습니다.', date : "2015-02-12", id: 6 }
  ];
})
.controller('NotifyDetailCtrl', function($scope, $stateParams) {

}
)



  .controller('signUpCtrl', function($scope, signUpService, $ionicPopup, $state) {
   
    $scope.data = {};
    $scope.signUp = function() {

   

      signUpService.signUpUser($scope.data.userid, $scope.data.password,$scope.data.name,$scope.data.email,$scope.data.birth,$scope.data.gender,$scope.data.phone).success(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: '회원가입 되셨습니다.',
          template: 'Welcome ' + $scope.data.userid + '!'
        });
        $state.go('login');
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'signUp failed!',
          template: 'Please check your credentials!'
        });
      });
    }
  })




  .controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
}
);

