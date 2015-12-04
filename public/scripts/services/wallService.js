(function () {
    "use-strict";
    angular
        .module('stateship')
        .service('WallService', wallService);

    function wallService($http) {

        var Service = {
            data: {
                comments: [],
                message: ''
            },
            postComment: function (scope) {
                return function () {
                    scope.$broadcast('show-errors-check-validity');
                    if (!scope.wallComment.$valid) {
                        return;
                    }
                    $http.post('/api/wall/' + Service.data.state, {
                            message: Service.data.message
                        }) //
                        .then(function () {
                            Service.data.message = '';
                            Service.readComments();
                        });
                }
            },
            readComments: function () {
                $http.get('/api/wall/' + Service.data.state) //
                    .then(function (response) {
                        Service.data.comments = response.data;
                    });
            }
        };
        return Service;
    }

})();