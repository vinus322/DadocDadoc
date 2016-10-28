angular.module('app.services', [])

    .factory('loading', function($ionicPopup) {
        var loading = $ionicPopup.show({
                    title: 'loading',
                    subTitle: '잠시만 기다려 주세요.',
                     close: function () {
                        alert("Dialog Closed!");
                    }
        });
        return{
            wait : function(){
                return loading;
            },
            closed: function(){
                loading.close();
            }
       };
     })

    .factory('userData', function() {
        var userData = {
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
            getUserid : function(){
                return userData.id;
            },
            get: function() {
                return userData;
            },
            set: function(inputData) {
                userData.id = inputData.user_id;
                userData.Name = inputData.name;
                userData.email = inputData.email;
                userData.birth = inputData.birth;
                userData.gender = inputData.gender;
                userData.phone = inputData.phone;
                userData.varify = inputData.varify;
                return null;
            }
        };
    })



    .factory('bookinfo', function() {
        var bookinfo = {
            idx : 0,
            code : 0,
            category : "test",
            bookURL : "testURL",
            imgURL : "img/book/1.jpg",
            title : "testBookinfo",
            author : "qsdesa322",
            publisher : "멤버십",
            price : "100000원",
            date : "2013-11-11",
            page : "20",
            size : "크기확인중",
            isbn13: "00000000",
            bookIntro : "test",
            authorIntro : "test",
            bookIndex : "test"
        };
        return {
            get : function(){
                return bookinfo;
            },
            set: function(inputData) {
                bookinfo = inputData;
                return null;
            }
        };
    })

    .factory('userInterest', function(){
         var interests=[
            {check : true, name : 'IT/인터넷', imgURL : "img/interest/1.png" },
            {check : false, name : '자기계발', imgURL : "img/interest/1.png" },
            {check : false, name : '경제경영', imgURL : "img/interest/1.png" },
            {check : false, name : '교육키즈', imgURL : "img/interest/1.png" },
            {check : false, name : '과학기술', imgURL : "img/interest/1.png" },
            {check : false, name : '인문/사회', imgURL : "img/interest/1.png" },
            {check : false, name : '문학', imgURL : "img/interest/1.png" },
            {check : false, name : '취미', imgURL : "img/interest/1.png" }
        ];


        return {
      
            get: function(){
                return interests;
            },
            set: function(inputData){
                for(var i=0; i<inputData.length; i++){
                    interests[i].check=inputData[i].check;
                }
                return null;
            }
        };

    })

    .factory('rcmdBooks', function () {
        var rcmdbooks = [{
            idx: 0,
            name: 'Ben Sparrow',
            date: new Date('2015', '12', '11'),
            bookimg: 'img/book/1.jpg',
        }, {
            idx: 1,
            name: 'Max Lynx',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/2.jpg',
        }, {
            idx: 2,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/4.jpg',
        }, {
            idx: 3,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/3.jpg',
        }, {
            idx: 4,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/5.jpg',
        }];
        return {
            all: function () {
                return rcmdbooks;
            },
            set : function(inputData){
                rcmdbooks = inputData;
            },
            get: function (rcmdbookIdx) {
                for (var i = 0; i < rcmdbooks.length; i++) {
                    if (rcmdbooks[i].idx === parseInt(rcmdbookIdx)) {
                        return rcmdbooks[i];
                    }
                }
                return null;
            }
        };
    })


 .factory('library', function () {
        var mybooks = [{
            idx: 0,
            name: 'Ben Sparrow',
            date: new Date('2015', '12', '11'),
            bookimg: 'img/book/1.jpg',
        }, {
            idx: 1,
            name: 'Max Lynx',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/2.jpg',
        }, {
            idx: 2,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/4.jpg',
        }, {
            idx: 3,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/3.jpg',
        }, {
            idx: 4,
            name: 'Adam Bradleyson',
            date: new Date('2015', '12', '10'),
            bookimg: 'img/book/5.jpg',
        }];
        return {
            all: function () {
                return mybooks;
            },
            set : function(inputData){
                mybooks = inputData;
            },
            get: function (bookIdx) {
                for (var i = 0; i < mybooks.length; i++) {
                    if (mybooks[i].idx === parseInt(bookIdx)) {
                        return mybooks[i];
                    }
                }
                return null;
            }
        };
    })


 .factory('userbasdRecommend', function() {
        var userMap = {};
        var userallSum =0;
        var testMap = {};
        var testallSum =0;
        var dict = {};
        

        return {
            termFreqMap: function(Data){
                for(var i=0; i<Data.length; i++){
                    var score = parseInt(Data[i].ib_score);
                    userMap[Data[i].book_id] = score;
                    userallSum += score*score;
                }
                console.log(userallSum);
            },
            transVector : function(){
              
            }
        };
    })




    .factory('newsFeeds', function () {
        var newsfeeds = [{
            id: 0,
            name: 'Ben Sparrow',
            date: new Date('2015', '12', '11'),
            myText: 'You on your way?',
            face: 'img/ben.png',
            bookimg: 'img/book/1.jpg',
            like: 1,
            comments: 2
        }, {
            id: 1,
            name: 'Max Lynx',
            date: new Date('2015', '12', '10'),
            myText: 'Hey, it\'s me',
            face: 'img/max.png',
            bookimg: 'img/book/2.jpg',
            like: 1,
            comments: 5
        }, {
            id: 2,
            name: 'Adam Bradleyson',
            date: new Date('2015', '11', '08'),
            myText: 'I should buy a boat',
            face: 'img/adam.jpg',
            bookimg: 'img/book/3.jpg',
            like: 3,
            comments: 4
        }, {
            id: 3,
            name: 'Perry Governor',
            date: new Date('2014', '05', '12'),
            myText: 'Look at my mukluks!',
            face: 'img/perry.png',
            bookimg: 'img/book/4.jpg',
            like: 2,
            comments: 7
        }, {
            id: 4,
            name: 'Mike Harrington',
            date: new Date('2014', '02', '08'),
            myText: 'This is wicked good ice cream.',
            face: 'img/mike.png',
            bookimg: 'img/book/5.jpg',
            like: 10,
            comments: 44
        }];

        return {
            all: function () {
                return newsfeeds;
            },
            get: function (newsfeedId) {
                for (var i = 0; i < newsfeeds.length; i++) {
                    if (newsfeeds[i].id === parseInt(newsfeedid)) {
                        return newsfeeds[i];
                    }
                }
                return null;
            }
        };
    });