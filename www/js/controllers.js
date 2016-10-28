angular.module('app.controllers', [])

    .controller('menuCtrl', function ($scope, $ionicPopup, userData,$state) {
        $scope.userData = userData.get();
    })

    .controller('signinCtrl', function ($scope, $ionicPopup,userData, $state) {
    
        var data = $scope.data = {};
        $scope.signin = function () {
            var keys = ["user_id", "password"];

            for (var key in keys) {
                if (typeof data[keys[key]] == "undefined") {
                    $ionicPopup.alert({
                        title: '로그인',
                        template: "아이디와 비밀번호를 전부 입력해야 해요!"
                    });
                    return;
                }
            }

            //data.birth
            ajax.signin(data, function (res) {
                if (res.status) {                 
                    $ionicPopup.alert({
                        title: '로그인',
                        template: data.user_id + "님, 환영해요!"
                    }); 
                    console.log(res.data);
                    userData.set(res.data);
                    $state.go("app.main");
                }
                else {
                    $ionicPopup.alert({
                        title: '로그인',
                        template: "아이디 혹은 비밀번호가 틀린거 같아요!"
                    });
                    return ;
                } 
            });

            
        }
    })

    .controller('signupCtrl', function ($scope, $ionicPopup, $state, userData) {
        var data = $scope.data = {};

        data.gender = "0";

        $scope.signup = function () {
            var keys = ["user_id", "password", "password_re", "name", "email", "birth", "gender", "phone"];

            for (var key in keys) {
                if (typeof data[keys[key]] == "undefined") {
                    $ionicPopup.alert({
                        title: '회원가입',
                        template: "빈칸을 다 채워주세요!"
                    });

                    return;
                }
            }
            if (data.password != data.password_re) {
                alert("비밀번호와 비밀번호 확인이 일치하지 않아요!");
                return;
            }
            data.birth = data.birth.getFullYear() +"-"+ data.birth.getMonth() +"-"+ data.birth.getDate();
            console.log(data.birth);
            
             ajax.signup(data, function (res) {
                if (res.status) {      
                    userData.set(data);
                }else {
                    $ionicPopup.alert({
                        title: '회원가입',
                        template: "이미 존재하는 사용자 입니다."
                    });
                    return;
                }
            });

            $state.go("verify", data);
        }
    })

    .controller('verifyCtrl', function ($scope, $ionicPopup, $state) {
        var data = $scope.data = $state.params;

        $scope.verifyEmail = function () {
            ajax.signup(data, function (res) {
                if (res.status) {
                    $ionicPopup.alert({
                        title: '이메일 인증',
                        template: "이메일이 발송되었어요!"
                    });
                }
                else {
                    $ionicPopup.alert({
                        title: '이메일 인증',
                        template: "이메일 발송이 실패했어요!"
                    });
                }
            });
        };

        $scope.editEmail = function () {
            var email = $scope.email = {};

            var editEmail = $ionicPopup.show({
                template: '<input ng-model="email.email">',
                title: 'Email',
                subTitle: '수정할 이메일을 입력해주세요!',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>OK</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            if (!email.email) {
                                e.preventDefault();
                            } else {
                                data.email = email.email;
                                return email.email;
                            }
                        }
                    }
                ]
            });
        };
    })

    .controller('selectInterestCtrl', function ($scope,$ionicPopup,$state,userInterest, userData) {


         $scope.interests = userInterest.get();
         var data = [];

         $scope.selectOK = function(){
            var count =0;
            for(var i=0; i<$scope.interests.length; i++){
               if($scope.interests[i].check){
                     data.push($scope.interests[i].name)
                        count++;
               }
            }
            if(count==0){
                 $ionicPopup.alert({
                        title: 'interest',
                        template: "하나 이상 선택해 주세요!"
                    });

            }
            else{
                 console.log(data.length);
                 for(var i=0; i<data.length ;i++){
                   var user_id = userData.getUserid();
                   var insertData = {
                    user_id : user_id,
                    data : data[i]
                  }
                  ajax.selectInterest(insertData, function (res){
                  });
               }
                userInterest.set($scope.interests);
                $state.go("neighbor");
            }

           
        }

    })

    .controller('neighborCtrl', function ($scope, $state ,$ionicPopup,userInterest, userData) {

     console.log("ok");
      var tmp = userInterest.get();

     $scope.interests=[];

      for(var i=0; i<tmp.length; i++){
        if(tmp[i].check){
            $scope.interests.push(tmp[i]);
        }

      }
      console.log($scope.interests);

       $scope.addNeighbor = function(name){
          var popup = $ionicPopup.show({
                title: '이웃 추가',
                subTitle: name+'을 이웃으로 추가하시겠습니까?',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>OK</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                            console.log("ok2");
                        }
                    }
                ]
            });
            var user_id =  userData.getUserid();
            var inputData = {
                user_id : user_id,
                n_id : "jeje"//임시
            }

            ajax.addneighbor(inputData, function (res) {


            });
      }

    })

    .controller('mainCtrl', function ($scope, $ionicPopup, rcmdBooks) {
            $scope.rcmdbooks = rcmdBooks.all();
            
            var loading = $ionicPopup.show({
                    title: 'loading',
                    subTitle: '잠시만 기다려 주세요.',
                     close: function () {
                        alert("Dialog Closed!");
                    }
            });

             var data = {
                 search : '알고리즘'
             }

            //임시 test용 
            ajax.searchBook(data, function (res) {
                console.log(res);
                rcmdBooks.set(res.data);

                $scope.rcmdbooks = rcmdBooks.all();
                $scope.$apply();
                loading.close();
            });

            $scope.comment = function () {
                var data = $scope.data = {};

                // An elaborate, custom popup
                var myPopup = $ionicPopup.show({
                    template: '<input ng-model="data.comment">',
                    title: 'Comment',
                    subTitle: '간단한 코멘트를 입력해주세요!',
                    scope: $scope,
                    buttons: [
                        {text: 'Cancel'},
                        {
                            text: '<b>OK</b>',
                            type: 'button-positive',
                            onTap: function (e) {
                                if (!data.comment) {
                                    e.preventDefault();
                                } else {
                                    return data.comment;
                                }
                            }
                        }
                    ]
                });
            };
        }
    )

    .controller('newsFeedCtrl', function ($scope, newsFeeds, loading, userData ) {

        loading.wait();
        var inputData={
            user_id : userData.getUserid()
        };
        ajax.newsfeed(inputData, function (res) {
                console.log(res);
                $scope.newsfeeds = res.data;
                $scope.$apply();
                loading.closed();
        });
    })

    .controller('settingCtrl', function ($scope) {
    })

    .controller('searchCtrl', function ($scope,$ionicPopup) {
        $scope.data ={};
        $scope.data.search ="";
        $scope.books ={};

       
        
        $scope.search = function(){
            console.log($scope.data.search);
             var data = {
                 search : $scope.data.search
             };
             var loading = $ionicPopup.show({
                    title: 'loading',
                    subTitle: '잠시만 기다려 주세요.',
                     close: function () {
                        alert("Dialog Closed!");
                    }
            });
            ajax.searchBook(data, function (res) {
                console.log(res);
                $scope.books = res.data;
                $scope.$apply();
                loading.close();
            });
        }
    })

    .controller('myPageCtrl', function ($scope, userData) {
        $scope.UserData = userData.get();
        console.log($scope.userData.Name);

    })

    .controller('myLibraryCtrl', function ($scope, userData, library) {
        $scope.bookInfo = library.all();
        $scope.UserData = userData.getUserid();
        console.log(userData.getUserid());

        
        var inputData={
            user_id : userData.getUserid()
        };

         ajax.myLibrary(inputData, function (res) {
                if(res.status){
                    console.log("ok");
                    console.log(res);
                    library.set(res.data);
                    $scope.bookInfo = library.all();
                    $scope.$apply();
                }
                else{
                    console.log("failed");
                }
        });

    })

    .controller('bookInfoCtrl', function ($scope, $stateParams,$ionicPopup, bookinfo, userData) {
        //$scope.comment =  newsFeeds.all();//임시
        $scope.star = {};
        $scope.bookList;
        $scope.bookInfo ={};
        $scope.style;
        $scope.data ;


     
        var inputData = {
                user_id : userData.getUserid(),
                book_id : $stateParams.rcmdBookId
            };

        //도서 정보 불러오기
        ajax.bookInfo(inputData, function(res){
            if(res.status){
                    console.log(res.data);
                    bookinfo.set(res.data);
                    $scope.bookInfo = bookinfo.get();
                    console.log($scope.bookInfo);
                    $scope.$apply();
                }
                else{
                    console.log("failed");
                }
        });

    
        //관련 테그 불러오기
        ajax.getTagCloud(inputData, function (res) {
               console.log("ok2");
               $scope.tagCloud = res.data;
               console.log(res.data);    
               $scope.$apply();
         });     
        //연관도서 불러오기
        ajax.relatedBook(inputData, function (res) {
               $scope.bookList = res.data;
               $scope.$apply();
         });
         //comment 불러오기
        ajax.getComment(inputData, function (res) {
            $scope.comments = res.data;
        });

        $scope.addlibrary = function(){
            var popup = $ionicPopup.show({
                title: '도서담기',
                subTitle: $scope.bookInfo.title+'도서를 서재에 담으시겠습니까?',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>OK</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                        //내서재에 추가하기
                        inputData.date = new Date();

                        console.log(inputData.date);
                        ajax.addLibrary(inputData, function (res) {
                                if(res.status){
                                    console.log("ok");        
                                }
                                else{
                                    console.log("failed");
                                }
                        });
                        }
                    }
                ]
         });
        }

        $scope.submitStar = function(){
            console.log($scope.star.value);
            var data = {
                user_id : userData.getUserid(),
                book_id : $stateParams.rcmdBookId,
                star : $scope.star.value
            };
            ajax.submitStar(data,function(res){
                if(!res.status){
                     $ionicPopup.alert({
                        title: 'err',
                        template: "err가 발생하였습니다."
                    }); 
                     return;
                }
                $ionicPopup.alert({
                        title: 'star',
                        template: "별점을 부여하였습니다!"
                });
            });
        }//별점 주기

        $scope.data = {};
        $scope.data.comment = "";
        //comment달기
        $scope.sendComment = function(){
            if($scope.data.comment=="") return;
            var data = {
                user_id : userData.getUserid(),
                book_id : $stateParams.rcmdBookId,
                comment : $scope.data.comment 
            };
            console.log(data);
            ajax.addComment(data, function (res) {
                if(!res.status){
                    console.log("err");
                }
            });
            ajax.getComment(inputData, function (res) {
                $scope.comments = res.data;
                $scope.$apply();
            }); 
        }


    })
    .controller('detailBookCtrl', function ($scope,$stateParams,bookinfo,userData) {
         $scope.bookInfo = bookinfo.get();
         console.log($scope.bookInfo);
    })

    .controller('testCtrl', function ($scope,$stateParams,userbasdRecommend,userData) {
        console.log("test");

        var inputData  = {
            user_id : userData.getUserid()
        };
        ajax.userBasedRecommend(inputData, function (res) {
            if(res.status){
                userbasdRecommend.termFreqMap(res.data);

            }
        }); 
         
    })

     .controller('neighborCtrl', function ($scope,userData, $ionicPopup) {
         $scope.myNeighbor;

         var inputData ={ 
             user_id : userData.getUserid()
         };

         ajax.myNeighbor(inputData, function (res) {
            if(res.status){
                $scope.myNeighbor = res.data;
                console.log(res.data);
             }
            }); 


         ajax.rcmNeighbor(inputData, function (res) {
            if(res.status){
                $scope.rcmNeighbor = res.data;
             }
            }); 

          $scope.addneighbor  = function(n_id){
            console.log("addneighbor");
             var popup = $ionicPopup.show({
                title: '이웃 추가',
                subTitle: name+'을 이웃으로 추가하시겠습니까?',
                scope: $scope,
                buttons: [
                    {text: 'Cancel'},
                    {
                        text: '<b>OK</b>',
                        type: 'button-positive',
                        onTap: function (e) {
                             var inputData ={ 
                                user_id : userData.getUserid(),
                                n_id    : n_id
                            };
                            ajax.addneighbor(inputData, function (res) {
                             if(res.status){
                                 $ionicPopup.alert({
                                        title: 'neighbor',
                                        template: "이웃으로 추가되었습니다."
                                });
                                ajax.myNeighbor(inputData, function (res) {
                                if(res.status){
                                    $scope.myNeighbor = res.data;
                                    $scope.$apply();
                                 }
                                });
                             }
                            }); 
                        }
                    }
                ]
            });
          
          }



    })



    .controller('notifyCtrl', function ($scope) {
        $scope.notifyLists = [
            {contents: '한수호님이 회원님의 서재를 구독하기 시작하였습니다.', date: "2015-02-12", id: 1},
            {contents: 'cowbell에게서 메세지가 도착하였습니다.', date: "2015-03-22", id: 2},
            {contents: 'event가 발생하였습니다.', date: "2015-04-01", id: 3},
            {contents: 'event가 발생하였습니다.', date: "2015-05-12", id: 4},
            {contents: 'event가 발생하였습니다.', date: "2015-02-12", id: 5},
            {contents: 'event가 발생하였습니다.', date: "2015-02-12", id: 6}
        ];
    })

    .controller('notifyDetailCtrl', function ($scope) {
    });
