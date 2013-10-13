'use strict';

angular.module('smmApp').controller('MainController',
		function($scope) {
	$scope.templates = [ {
		name : 'header',
		url : 'public/views/header.html'
	}];
	$scope.header = $scope.templates[0];   
});