"use-strict";
var app = angular.module('stateship');

app.controller('stateCtrl', function($scope){
	$scope.getReps = function(state){
		console.log(state);
	};
});