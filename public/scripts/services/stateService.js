(function(){
	"use strict";
	angular
		.module('stateship')
		.service('StateService', stateService);

		function stateService($http, $q) {
			this.currentState = '';
			this.setCurrentState = setCurrentState;
			this.getCurrentState = getCurrentState;

			function setCurrentState(state){
				this.currentState = state;
			}

			function getCurrentState(){
				return currentState;
			}
		}

})();