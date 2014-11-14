var module = angular.module('nzSweetAlert', []);

module.factory('nzSwal', ['$q',
    function($q) {
        if (!window.swal) {
            console.log('Sweet Alert is not loaded!');
            return;
        }

        return service;

        function service(p1, p2, p3) {

            var deferred = $q.defer();

            var params;

            if (typeof p1 !== 'object') {
                params = {
                    title: p1 ? p1 : '',
                    text: p2 ? p2 : '',
                    type: p3 ? p3 : null,
                };
            } else {
                params = p1;
            }

            swal(params, function(isConfirm) {
                if (isConfirm) {
                    deferred.resolve();
                } else {
                    deferred.reject();
                }
            });

            return deferred.promise;
        }
    }
]);