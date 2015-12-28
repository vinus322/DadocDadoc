angular.module('app.controllers', [])

    .controller('menuCtrl', function ($scope, $ionicPopup, userData) {
        $scope.userData = userData.get();
    })

    .controller('signinCtrl', function ($scope, $ionicPopup) {
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

            ajax.signin(data, function (res) {
                if (res.status) {
                    $ionicPopup.alert({
                        title: '로그인',
                        template: data.user_id + "님, 환영해요!"
                    });
                }
                else {
                    $ionicPopup.alert({
                        title: '로그인',
                        template: "아이디 혹은 비밀번호가 틀린거 같아요!"
                    });
                }
            });
        }
    })

    .controller('signupCtrl', function ($scope, $ionicPopup, $state) {
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

    .controller('selectInterestCtrl', function ($scope) {
    })

    .controller('neighborCtrl', function ($scope) {
    })

    .controller('mainCtrl', function ($scope, $ionicPopup, rcmdBooks) {
            $scope.rcmdbooks = rcmdBooks.all();

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

    .controller('newsFeedCtrl', function ($scope, newsFeeds) {
        $scope.newsfeeds = newsFeeds.all();
    })

    .controller('settingCtrl', function ($scope) {
    })

    .controller('searchCtrl', function ($scope) {
    })

    .controller('myPageCtrl', function ($scope) {
    })

    .controller('detailBookCtrl', function ($scope, $stateParams, rcmdBooks) {
        $scope.rcmdbook = rcmdBooks.get($stateParams.rcmdBookId);
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
