'use strict';

angular.module('smmApp').controller('ContentController',
		function($scope,$dialog,EventFactory) {
	
	console.log("In content controller");
	
	$scope.openEventInfoDialog = function(eventId) {
		EventFactory.selectedEventId = eventId;
		$scope.opts = {
			backdrop : true,
			keyboard : true,
			backdropClick : true,
			templateUrl : 'public/views/event-info.html',
			controller : 'EventInfoController',
		};
		$scope.openDialog = function() {
			var d = $dialog.dialog($scope.opts);
			d.open().then(function(result) {
				if (result) {
					console.log('dialog closed with result: ' + result);
				}
			});
		};
		$scope.openDialog();
	};
	
	

	 function initializeSlideSettings(){
		 // $scope.myInterval = 0;
		  var slides = $scope.slides = [];
		  $scope.addSlide = function(event) {
			var eventId = event.eventId;
		    var imageUrl = event.url;
		    var eventName = event.eventName;
		    var eventTime = event.time;
		    slides.push({
		      image: imageUrl,
		      eventName: eventName,
		      eventTime : eventTime,
		      eventId : eventId
		    });
		  };
		  for (var i=0; i<eventsInfoArray.length; i++) {
		    $scope.addSlide(eventsInfoArray[i]);
		  }
	  };
	 
	 
	var eventsInfoArray = [];
//	if(!EventFactory.eventData.hasOwnProperty("events")){
		
	var promise = EventFactory.getEventData();
	promise.then(function(eventData) {
		EventFactory.eventData = eventData;
		for(var i = 0 ; i<eventData.events.length ; i++){
			var obj = eventData.events[i];
			var event = {};
			event.url = obj.eventDetails.pictureUrl;
			event.eventName = obj.eventName;
			event.time = obj.eventDetails.time;
			event.eventId = obj.eventId;
			eventsInfoArray.push(event);
		}
		initializeSlideSettings();
		
		
	}, function(reason) {
		console.log('Failure: '+reason);
	});
	 
	//}
	
});