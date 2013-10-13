'use strict';

angular.module('smmApp').controller('EventInfoController',
		function($scope,EventFactory,dialog) {
	var eventData = EventFactory.getSelectedEventInfo();
	$scope.eventData = eventData
	
	$scope.closeDialog = function(){
	    dialog.close();
	  };
	
}
);