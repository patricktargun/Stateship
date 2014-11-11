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

		function getRepsByState(state) {
			return $http.post('/api/representatives', {
				address: state
			}).then(function(response) {
				var arr = response.data;

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

					} else {
						stateReps.push(arr[i]);
					}

				}

				return response.data;
			});
		}

		function getRepArrays() {
			return (local.length > 0) ? [national, stateReps, local] : [national, stateReps];
		}

	}

})();
