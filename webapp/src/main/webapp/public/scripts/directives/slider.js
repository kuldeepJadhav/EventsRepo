'use strict';
angular.module('smmApp').directive('slider' ,function (EventFactory) {
  return {
    restrict:'E',
    templateUrl:'public/views/slider.html', 
    transclude:true,
    replace:true,
    link: function(scope, iElement, iAttrs) {}
  };
});

