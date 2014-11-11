(function() {
    "use-strict";
    angular
        .module('stateship')
        .service('StateService', stateService);

    function stateService($http, $q) {
        var national = ['', ''];
        var stateReps = [];
        var local = [];
        this.getRepsByState = getRepsByState;
        this.getRepArrays = getRepArrays;

        function getRepsByState(state, address) {
            return $http.post('/api/representatives', {
                address: address || state
            }).then(function(response) {

            	//separates out information
            	//national: US President, Vice President, Senators, US Rep
            	//state: Governor, Attorney General, State Legislators, etc
            	//local: County and City government
                var arr = response.data;
                national = ['', ''];
                stateReps = [];
                local = [];
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].office.levels &&
                        arr[i].office.levels.indexOf('country') > -1) {
                        switch (arr[i].office.name) {
                            case 'President':
                                national[0] = arr[i];
                                break;
                            case 'Vice President':
                                national[1] = arr[i];
                                break;
                            default:
                                national.push(arr[i]);
                                break;
                        }

                    } else if (arr[i].office.divisionId.indexOf('county') > -1 ||
                        arr[i].office.divisionId.indexOf('place') > -1) {
                        local.push(arr[i]);


                    } else {
                        stateReps.push(arr[i]);
                    }

                }

                return response.data;
            });
        }

        function getRepArrays() {
        	//returns an array of arrays that contain the neeeded info.
            return [national, stateReps, local];
        }

    }

})();
