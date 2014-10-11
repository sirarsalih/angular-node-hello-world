function mainService ($http) {
    return {
        get: function () {
            return $http({
                method: 'GET',
                url: 'http://localhost:1337/'
            });
        },
        post: function (data) {
            return $http({
                method: 'POST',
                url: 'http://localhost:1337/post',
                data: data
            });
        }
    };
}