'use strict';
angular.module('calendarApp').directive('calendarContent', function () {
	return {
	    restrict:'A', // A = Attribute, C = Class Name, E = Element, M = HTML Comments
	    templateUrl:'public/views/calendar-content.html'
	}
});