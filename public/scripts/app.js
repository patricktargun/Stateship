(function() {
    'use strict';
    angular
        .module('stateship', [
            'ngRoute',
            'mapDirective',
            'nzSweetAlert'
        ])
        .constant('stateNames', {
            al: "Alabama",
            ak: "Alaska",
            az: "Arizona",
            ar: "Arkansas",
            ca: "California",
            co: "Colorado",
            ct: "Connecticut",
            de: "Delaware",
            fl: "Florida",
            ga: "Georgia",
            hi: "Hawaii",
            id: "Idaho",
            il: "Illinois",
            in: "Indiana",
            ia: "Iowa",
            ks: "Kansas",
            ky: "Kentucky",
            la: "Louisiana",
            me: "Maine",
            md: "Maryland",
            ma: "Massachusetts",
            mi: "Michigan",
            mn: "Minnesota",
            ms: "Mississippi",
            mo: "Missouri",
            mt: "Montana",
            ne: "Nebraska",
            nv: "Nevada",
            nh: "New Hampshire",
            nj: "New Jersey",
            nm: "New Mexico",
            ny: "New York",
            nc: "North Carolina",
            nd: "North Dakota",
            oh: "Ohio",
            ok: "Oklahoma",
            or: "Oregon",
            pa: "Pennsylvania",
            ri: "Rhode Island",
            sc: "South Carolina",
            sd: "South Dakota",
            tn: "Tennessee",
            tx: "Texas",
            ut: "Utah",
            vt: "Vermont",
            va: "Virginia",
            wa: "Washington",
            wv: "West Virginia",
            wi: "Wisconsin",
            wy: "Wyoming"
        })
        .config(configThat);

    function configThat($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/map.html',
                controller: 'MapCtrl',
                controllerAs: 'mapCtrl'
            })
            .when('/state/:state/wall', {
                templateUrl: 'views/wall.html',
                controller: 'WallCtrl',
                controllerAs: 'wallCtrl'
            })
            .when('/state/:state/:address', {  //route for when full address is used
                templateUrl: 'views/stateInfo.html',
                controller: 'StateCtrl',
                controllerAs: 'stateCtrl',
                resolve: {
                    currentState: function($route) {
                        return $route.current.params.state;
                    },
                    repArrays: function($route, StateService) {

                        return StateService.getRepsByState($route.current.params.address+", "+$route.current.params.state);
                    }
                }
            })
            .when('/state/:state', {  //route for when user clicks a state
                templateUrl: 'views/stateInfo.html',
                controller: 'StateCtrl',
                controllerAs: 'stateCtrl',
                resolve: {
                    currentState: function($route) {
                        return $route.current.params.state;
                    },
                    repArrays: function($route, StateService) {
                        return StateService.getRepsByState($route.current.params.state);
                    }
                }
            })
            .when('/emailRep', {
                templateUrl: 'views/email.html',
                controller: 'EmailCtrl',
                controllerAs: 'vm',
                resolve: {
                    currentRep: function(EmailService) {
                        return EmailService.getCurrentRep();
                    },

                }

            });
    }

})();
