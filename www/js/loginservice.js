
angular.module('starter.LoginService', [])

.factory('userData', function() {
  var userdata = {
      id : "qsdesa322",
      Name : "Mino",
      faceimg : "img/Mino.jpg",
      email : "qsdesa322@naver.com",
      birth : "1994-03-22",
      interest : "IT/인터넷",
      gender : "남자",
      phone : "010-0000-0000",
      varify : "0",
      intro: "see below for details about"

  };
  return {
    get: function() {
      return userdata;
    },
    set: function(inputData) {
      userdata.id = inputData.user_id;
      userdata.Name = inputData.name;
      userdata.email = inputData.email;
      userdata.birth = inputData.birth;
      userdata.gender = inputData.gender;
      userdata.phone = inputData.phone;
      userdata.varify = inputData.varify;
      return null;
    }
  };
})


.service('confirmEmail', function($q,$state,$ionicPopup,userData,$timeout){
  return{

      EmailPopup : function() {
        
         var edit = {}
        var editEmail  = $ionicPopup.show({
        template: '<input ng-model="edit.pop">',
        title: 'email',
        subTitle: '수정할 이메일을 입력하세요',
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>ok</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!edit.pop) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
               // userData.email = edit.pop;
                return edit.pop;
              }
            }
          }
        ]
      });
          editEmail.then(function(res) {
            
            $state.go('app.main');
            console.log('Tapped!', res);

          });
          $timeout(function() {
             myPopup.close(); //close the popup after 3 seconds for some reason
          }, 3000);
      },

       confirmPopup : function() {


       var confirm;
       
      var confirmEmail  = $ionicPopup.show({
      template: '<input name="confirm">',
      title: 'email',
      subTitle: '인증코드를 입력하세요',
     
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>ok</b>',
          type: 'button-positive',
          onTap: function(e) {
           // confirm = document.getElementById('confirm').value;  
           //confirm = angular.element($("confirm")).text;
            if (!confirm) {

              e.preventDefault();
            } else {
               console.log("ok",confirm);
              return confirm;
            }
          }
        }
      ]
    });
        confirmEmail.then(function(res) {
           console.log('ok!', res);
          if(res){
            $state.go('app.main');
          }
          console.log('Tapped!', res);
        
        });
        
        $timeout(function() {
           confirmEmail.close(); //close the popup after 3 seconds for some reason
        }, 3000);
    }

  }
})


  .service('signUpService', function($q,$ionicPopup,$http) {
    return {

      signUpUser: function(userid,password,name,email,birth,gender,phone) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        if(gender=="남")
          gender = "0";
        else
          gender = "1";


        var dataObj = 
        {
          method: 'POST',
          url : "http://210.118.64.174:27017/api/signup",
          data: {
            userID: userid,
            password : password,
            Name : name,
            email : email,
            birth : birth,
            gender : gender,
            phone : phone
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }

         
        if (userid == 'undefined' || password  == 'undefined') {
          //deferred.resolve('Welcome ' + name + '!');       
          deferred.reject('Wrong credentials.');

        } else {
             
          deferred.resolve('ok');

          $http(dataObj).success(function(data, status, headers, config)
          {
            if (data.status!=''){
                state = true;
                deferred.resolve('Welcome ' + id + '!');
            }
            else{
               state = false;   
               deferred.reject('Wrong credentials.');  
            }    
          }).error(function(data, status) { 
              state = false;
              deferred.reject('Wrong credentials.');
          });
         
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  })


  .service('startLogin', function($http,userData, $ionicPopup,$q){

    return {
      loginUser : function(id , pw)
      {
        var deferred = $q.defer();
        var promise = deferred.promise;
        var dataObj = 
        {
          method: 'POST',
          url : "http://210.118.64.174:27017/api/signin",
          data: {
            userID: id,
            password : pw
          },
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }
    
      $http(dataObj).success(function(data, status,obj, headers, config)
      {
        if (data.status!=''){
            state = true;

             var alertPopup = $ionicPopup.alert({
             title: data.obj.user_id
             });
             userData.set(data.obj);

               //$scope.userData.userid = data.obj.user_id;
               
         


            deferred.resolve('Welcome ' + id + '!');
        }
        else{
           state = false;   
           deferred.reject('Wrong credentials.');  
        }    
      }).error(function(data, status) { 
          state = false;
          deferred.reject('Wrong credentials.');
      });

        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  });
