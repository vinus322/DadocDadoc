var ajax = (function () {
    //var base_url = "http://115.88.201.36";
    var base_url = "http://210.118.64.174:27017";

    this.signin = function (query, callback) {
        $.ajax({
            url: base_url + "/api/signin",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.alreadyUser = function (query, callback) {
        $.ajax({
            url: base_url + "/api/alreadyUser",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.signup = function (query, callback) {
        $.ajax({
            url: base_url + "/api/signup",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

   this.addneighbor = function (query, callback) {
        $.ajax({
            url: base_url + "/api/addNeighbor",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    /* bookinfo관련 API ---------------------*/
    this.bookInfo = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/bookInfo",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

   this.getTagCloud = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/tagCloud",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };


   this.relatedBook = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/relatedBooks",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.getComment = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/getComment",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

     this.addComment = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/addComment",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.submitStar = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/submitStar",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };
    /*----------------------------------- */

     this.searchBook = function (query, callback) {
        $.ajax({
            url: base_url + "/api/searchBook",
            method: "POST",
            data: query
        }
        ).done(function (res) {
            callback(res);
        });
    };


    

    this.selectInterest = function (query, callback) {
        $.ajax({
            url: base_url + "/api/selectInterest",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };


    this.addLibrary = function (query, callback) {
        $.ajax({
            url: base_url + "/api/addLibrary",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };


    this.myLibrary = function (query, callback) {
        $.ajax({
            url: base_url + "/api/myLibrary",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };



    this.userBasedRecommend = function (query, callback) {
        $.ajax({
            url: base_url + "/api/book/userBasedRecommend",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.myNeighbor = function (query, callback) {
        $.ajax({
            url: base_url + "/api/main/myneighbor",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };


     this.rcmNeighbor = function (query, callback) {
        $.ajax({
            url: base_url + "/api/main/rcmneighbor",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.newsfeed = function (query, callback) {
        $.ajax({
            url: base_url + "/api/main/newsfeed",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };




    return this;
})();