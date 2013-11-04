'use strict';
angular.module('smmApp').factory('EventFactory', function($http,$q) {
	return {
		eventData : {},
		selectedEventId: "",
		getEventData : function() {
			console.log('In getEventData method of EventFactory');
			var url = 'api/json/events/events-info.json';
			var deferred = $q.defer();
			$http.get(url).success(function(data) {
					deferred.resolve(data);
			});
			return deferred.promise;
		},// end getEntities
		getSelectedEventInfo : function(){
			for(var i = 0 ;i<this.eventData.events.length ; i++){
				var event = this.eventData.events[i];
				if(event.eventId == this.selectedEventId){
					return event;
					break;
				}
			}
			
		} 
	};
});

