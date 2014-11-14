(function(){
	"use-strict";

	angular
	.module('stateship')
	.controller('MainCtrl', MainCtrl);  //this controller is the parent controller of
										//whatever view is loaded through the current
										//route

	MainCtrl.$inject = ["$location", "$scope"];

	function MainCtrl($location, $scope) {
		var vm = this;
		vm.submitAddress = submitAddress; // function to change location path based on address
		vm.address = {};
		vm.stateList = [ 				  //array for state selector
		{ name: 'ALABAMA', abbreviation: 'AL'},
		{ name: 'ALASKA', abbreviation: 'AK'},
		{ name: 'ARIZONA', abbreviation: 'AZ'},
		{ name: 'ARKANSAS', abbreviation: 'AR'},
		{ name: 'CALIFORNIA', abbreviation: 'CA'},
		{ name: 'COLORADO', abbreviation: 'CO'},
		{ name: 'CONNECTICUT', abbreviation: 'CT'},
		{ name: 'DELAWARE', abbreviation: 'DE'},
		{ name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
		{ name: 'FLORIDA', abbreviation: 'FL'},
		{ name: 'GEORGIA', abbreviation: 'GA'},
		{ name: 'HAWAII', abbreviation: 'HI'},
		{ name: 'IDAHO', abbreviation: 'ID'},
		{ name: 'ILLINOIS', abbreviation: 'IL'},
		{ name: 'INDIANA', abbreviation: 'IN'},
		{ name: 'IOWA', abbreviation: 'IA'},
		{ name: 'KANSAS', abbreviation: 'KS'},
		{ name: 'KENTUCKY', abbreviation: 'KY'},
		{ name: 'LOUISIANA', abbreviation: 'LA'},
		{ name: 'MAINE', abbreviation: 'ME'},
		{ name: 'MARYLAND', abbreviation: 'MD'},
		{ name: 'MASSACHUSETTS', abbreviation: 'MA'},
		{ name: 'MICHIGAN', abbreviation: 'MI'},
		{ name: 'MINNESOTA', abbreviation: 'MN'},
		{ name: 'MISSISSIPPI', abbreviation: 'MS'},
		{ name: 'MISSOURI', abbreviation: 'MO'},
		{ name: 'MONTANA', abbreviation: 'MT'},
		{ name: 'NEBRASKA', abbreviation: 'NE'},
		{ name: 'NEVADA', abbreviation: 'NV'},
		{ name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
		{ name: 'NEW JERSEY', abbreviation: 'NJ'},
		{ name: 'NEW MEXICO', abbreviation: 'NM'},
		{ name: 'NEW YORK', abbreviation: 'NY'},
		{ name: 'NORTH CAROLINA', abbreviation: 'NC'},
		{ name: 'NORTH DAKOTA', abbreviation: 'ND'},
		{ name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
		{ name: 'OHIO', abbreviation: 'OH'},
		{ name: 'OKLAHOMA', abbreviation: 'OK'},
		{ name: 'OREGON', abbreviation: 'OR'},
		{ name: 'PENNSYLVANIA', abbreviation: 'PA'},
		{ name: 'RHODE ISLAND', abbreviation: 'RI'},
		{ name: 'SOUTH CAROLINA', abbreviation: 'SC'},
		{ name: 'SOUTH DAKOTA', abbreviation: 'SD'},
		{ name: 'TENNESSEE', abbreviation: 'TN'},
		{ name: 'TEXAS', abbreviation: 'TX'},
		{ name: 'UTAH', abbreviation: 'UT'},
		{ name: 'VERMONT', abbreviation: 'VT'},
		{ name: 'VIRGINIA', abbreviation: 'VA'},
		{ name: 'WASHINGTON', abbreviation: 'WA'},
		{ name: 'WEST VIRGINIA', abbreviation: 'WV'},
		{ name: 'WISCONSIN', abbreviation: 'WI'},
		{ name: 'WYOMING', abbreviation: 'WY' }
		].sort(function(a, b){
			if(a.abbreviation > b.abbreviation)
				return 1;
			if(a.abbreviation < b.abbreviation)
				return -1;
			return 0;
		});

		function submitAddress(){
			$scope.$broadcast('show-errors-check-validity');
			if (!$scope.searchReps.$valid) {
				return; 
			}
			else if ($scope.searchReps.$valid) {
				$location.path("/state/"+vm.address.state.abbreviation+"/"+vm.address.street+','+vm.address.city);
			}
		}			

	}
	
})();