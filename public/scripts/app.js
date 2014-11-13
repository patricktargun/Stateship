(function() {
    'use strict';
    angular
        .module('stateship', [
            'ngRoute',
            'mapDirective'
        ])
        .config(configThat);

    function configThat($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/map.html',
                controller: 'MapCtrl',
                controllerAs: 'mapCtrl'
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
            }); 
    }

})();
