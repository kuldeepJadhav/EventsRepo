'use strict';

angular.module('calendarApp').directive('calendarTab', function () {
	return {
	    restrict:'A', // A = Attribute, C = Class Name, E = Element, M = HTML Comments
	    templateUrl:'/public/views/calendar-tab.html',
        controller: function($scope,$timeout,$window) {
        	var tabElement = null;
        	this.addElement = function(elem) {
        		tabElement = elem;
        	};
        	function fillToScreenHeight() {
        	};
        	$timeout(function(){
        		fillToScreenHeight();
        	});
        },
        link: function(scope, element, attrs, tabCtrl) {
        	tabCtrl.addElement(element);
        }
	};
});
