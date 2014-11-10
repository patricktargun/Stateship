(function() {
	'use strict';

	angular
		.module('stateship', [
			'ngRoute',
			'mapDirective'
		])
		.config(configThat);

	function configThat($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'views/map.html',
			controller: 'MapCtrl',
			controllerAs: 'mapCtrl'
		})
		.when('/state/:state', {
			templateUrl: 'views/stateInfo.html',
			controller: 'StateCtrl',
			controllerAs: 'stateCtrl',
			resolve: {
				currentState: function($route){
						console.log('routing');
					return $route.current.params.state;
				}
			}
		})
	}

})();
