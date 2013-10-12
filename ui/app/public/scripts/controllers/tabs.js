'use strict';

angular.module('smmApp')
.controller('TabsController', function($scope) {
  $scope.tabs = [
      { link : '#/home', label : 'Home' },
      { link : '#/about', label : 'About' },
      { link : '#/content', label : 'Content' }
    ];
  $scope.selectedTab = $scope.tabs[0];
  $scope.setSelectedTab = function(tab) {
    $scope.selectedTab = tab;
  };
  $scope.tabClass = function(tab) {
    if ($scope.selectedTab === tab) {
      return 'active';
    }else{
      return '';
    }
  };
});

