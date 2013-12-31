'use strict';
var  eventFactory =function($http,$q) {
	return {
		eventData : {},
		selectedEventId: "",
		getEventData : function(callback) {
			console.log('In getEventData method of EventFactory');
			var url = 'api/json/events/events-info.json';
			$http.get(url).success(function(data) {
				callback(data);
			});
		},// end getEntities
		getSelectedEventInfo : function(){
			for(var i=0; i < this.eventData.length ; i++){
				for(var j=0 ; j<this.eventData[i].eventData.length ; j++){
					var eventObj = this.eventData[i].eventData[j];
					if(eventObj.eventId ==this.selectedEventId){
						return eventObj; 
					}
				}
			}
		} ,
		getDataForCalendarView : function(){
			var eventsData = this.eventData;
			var eventObjects = [];
			for(var index = 0; index < eventsData.length ; index++){
				var cnt=1;
				for(var i=0; i < eventsData[index].eventData.length ; i++){
					var eventObj = new Object();
				    eventObj.id = eventsData[index].eventData[i].eventId;
				    eventObj.title = eventsData[index].eventData[i].eventName;
				    eventObj.start = "Wed, "+cnt+" Oct 2013 13:00:00 EST";
				    eventObj.end = "Wed, "+cnt+" Oct 2013 13:00:00 EST";
				   // eventObj["show"+ eventObj.id] = false;
				    cnt++;
				    //$scope["show"+ eventObj.id] = false;
				    eventObjects.push(eventObj);
				}
			}
			
			return eventObjects; 
			
		}
		
	};
};
angular.module('smmApp').factory('EventFactory',eventFactory );
angular.module('calendarApp').factory('EventFactory',eventFactory );

