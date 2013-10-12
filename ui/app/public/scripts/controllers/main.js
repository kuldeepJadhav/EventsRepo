'use strict';

angular.module('smmApp').controller('MainController',
		function($scope) {
	$scope.templates = [ {
		name : 'header',
		url : 'public/views/header.html'
	}, {
		name : 'tabs',
		url : 'public/views/tabs.html'
	} ];

	$scope.header = $scope.templates[0];
	$scope.tabs = $scope.templates[1];

});