(function(){
	"use-strict";
	angular
		.module('stateship')
		.controller('StateCtrl', StateCtrl);

		function StateCtrl(currentState){
			var vm = this;
			vm.getReps = getReps;
			vm.state = currentState;

			function getReps(state){
				console.log(state);
			};
		
		}
})();