(function(){
	angular
		.module('stateship')
		.controller('MapCtrl', MapCtrl);

		function MapCtrl(StateService, $location, $scope){
			var vm = this;
			vm.setCurrentState = setCurrentState;
			vm.showCurrentState = showCurrentState;
			// $scope.state = state;
			// console.log($scope.state);

			function setCurrentState(state){
				console.log(state);

				
				$location.path('/state/' + state);
				$scope.$apply();
				
			}

			function showCurrentState(state){
				console.log(state);
			}

			function hey(){
				console.log('hey');
			}
		}
})();