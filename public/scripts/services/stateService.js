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
                    if (arr[i].channels) {
                        for (var j = 0; j < arr[i].channels.length; j++) {
                            if (arr[i].channels[j].type === "Facebook")
                                arr[i].facebook = arr[i].channels[j].id;
                            else if (arr[i].channels[j].type === "Twitter")
                                arr[i].twitter = arr[i].channels[j].id;
                        }
                    }

                    if (arr[i].office.name === 'President of the United States') {
                        national[0] = arr[i];
                        arr.splice(i, 1);
                        i--;
                        continue;
                    } else if (arr[i].office.name === 'Vice-President of the United States') {
                        national[1] = arr[i];
                        arr.splice(i, 1);
                        i--;
                        continue;
                    } else if (arr[i].office.name === 'United States Senate') {
                        national.push(arr[i]);
                        arr.splice(i, 1);
                        i--;
                        continue;
                    } else if (arr[i].office.name.indexOf('United States House of Representatives') > -1) {
                        national.push(arr[i]);
                        arr.splice(i, 1);
                        i--;
                        continue;
                    } else if (arr[i].office.divisionId.indexOf('county') > -1 ||
                        arr[i].office.divisionId.indexOf('place') > -1) {
                        local.push(arr[i]);
                        arr.splice(i, 1);
                        i--;
                        continue;
                    } else {
                        stateReps.push(arr[i]);
                        arr.splice(i, 1);
                        i--;
                        continue;
                    }


                }

                if (local.length > 0) fixPicture(local);
                if (national[0]) fixPicture(national);
                if (stateReps.length > 0) fixPicture(stateReps);
                return [national, stateReps, local];
            });
        }

        function getRepArrays() {
            //returns an array of arrays that contain the needed info.
            return [national, stateReps, local];
        }

        function fixPicture(arr) {
            var suffixes = ["Jr.", "Sr.", "II", "III", "IV", "V"];
            for (var i = 0; i < arr.length; i++) {
                if (!arr[i].photoUrl) {

                    var array = arr[i].name.split(" ");
                    if (suffixes.indexOf(array[array.length - 1]) !== -1) {
                        array.pop();
                    }
                    arr[i].initials = array[0][0] + array[array.length - 1][0];
                }
            }
        }

    }

})();
