var ajax = (function () {
    var base_url = "http://115.88.201.36";

    this.signin = function (query, callback) {
        $.ajax({
            url: base_url + "/api/users/signin",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    this.signup = function (query, callback) {
        $.ajax({
            url: base_url + "/api/users/signup",
            method: "POST",
            data: query
        }).done(function (res) {
            callback(res);
        });
    };

    return this;
})();