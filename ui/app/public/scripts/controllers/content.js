'use strict';

angular.module('smmApp').controller('ContentController',
		function($scope,$dialog,EventFactory) {
	
	console.log("In content controller");
	
	//$( "#contentsdiv1" ).hide();
	$scope.calendarView = false;
	$scope.loadedCalendarData = false;
	
	$scope.toggleViews = function(){
		if(!$scope.calendarView){
			$scope.calendarView  = true;
			$('#view-button').html('Show Template View');
			$('#calendar').show();
			$('#template-View').hide();
			if (!$scope.loadedCalendarData) {
				if ($('#calendar'))
					$('#calendar').fullCalendar({
						// put your options and callbacks here
						events : $scope.eventObjects,
						
						  eventClick: function(calEvent, jsEvent, view) {

						        // change the border color just for fun
							  $scope.openEventInfoDialog(calEvent.id);
						       

						    }
					});
				$scope.loadedCalendarData = true;
			}
			 //   $('#calendar').hide();
		}
		else{
			$scope.calendarView  = false;
			$('#view-button').html('Show Calendar View');
			$('#calendar').hide();
			$('#template-View').show();
		}
	};
	
	$scope.clicked =function(){
		alert("clcked...");
	};
	
	$scope.mouseOutDiv = function(id){
		//alert('here');
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		
		 /*$( "#"+divId ).show( "slow", function() {
			    //alert( "Animation complete." );
			  });
		 
		 $( "#"+imageDivId ).hide( "slow", function() {
			    //alert( "Animation complete." );
			  });*/
		 
		 $( "#"+divId ).hide();
		 
		 $( "#"+imageDivId ).show();
	};
	
	$scope.mouseOverDiv = function(id){
		
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		
		
		$( "#"+divId ).show();
		 
		 $( "#"+imageDivId ).hide();
		 $( "#"+divId ).css( "visibility" ,"");
	};
	
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
		  $scope.eventObjects = [];
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
		  var cnt = 1;
		  for (var i=0; i<eventsInfoArray.length; i++) {
		    $scope.addSlide(eventsInfoArray[i]);
		    var eventObj = new Object();
		    eventObj.id = eventsInfoArray[i].eventId;
		    eventObj.title = eventsInfoArray[i].eventName;
		    eventObj.start = "Wed, "+cnt+" Oct 2013 13:00:00 EST";
		    eventObj.end = "Wed, "+cnt+" Oct 2013 13:00:00 EST";
		    eventObj["show"+ eventObj.id] = false;
		    cnt++;
		    $scope["show"+ eventObj.id] = false;
		    $scope.eventObjects.push(eventObj);
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