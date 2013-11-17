/*
 * Content controller is responsible for gathering the
 * events content from factory and storing the 
 * data in Eventfactory singelton so that the 
 * data can be used in eventInfo and other sections.
 * 
 * 1) Provides functions to toggle between calendar view and 
 * template view
 * 2) To open the eventInfo dialog.
 * */
'use strict';
angular.module('smmApp').controller('ContentController',
		function($scope,$dialog,EventFactory) {
	console.log("In content controller");
	//$( "#contentsdiv1" ).hide();
	$scope.calendarView = false;
	$scope.loadedCalendarData = false;
	/*
	 * function to toggle between calendar and template view
	 * */
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
						events : EventFactory.getDataForCalendarView(),
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
	
	
	$scope.mouseOutDiv = function(id){
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		 $( "#"+divId ).hide();
		 $( "#"+imageDivId ).show();
		 //box-shadow: 15px 15px 10px rgb(107, 91, 67);
	};
	
	$scope.mouseOverDiv = function(id){
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		$( "#"+divId ).show();
		 $( "#"+imageDivId ).hide();
		 $( "#"+divId ).css( "visibility" ,"");
	};
	
	/**
	 * Function responsible to show the event info dialog.
	 */
	
	var eventInfoDialog ; 
	var enrollDialog;
	$scope.openEventInfoDialog = function(eventId) {
		EventFactory.selectedEventId = eventId;
		$scope.opts = {
			backdrop : true,
			keyboard : true,
			backdropClick : true,
			templateUrl : 'public/views/event-info.html',
			controller : function($scope){
				var eventData = EventFactory.getSelectedEventInfo();
				$scope.eventData = eventData;
				
				 $scope.openEnrollDialog = function(eventId) {
						//EventFactory.selectedEventId = eventId;
						$scope.opts = {
							backdrop : true,
							keyboard : true,
							backdropClick : true,
							templateUrl : 'public/views/enroll.html',
							controller :function($scope){
								 $scope.personDetailsObject = [];
								// $scope.test ="test";
								 // $scope.personDetailsObject.push({'name':'Kuldeep','phone':'9421010243'});
								  $scope.name="";
								  $scope.phone="";
								  $scope.email="";
								  var selectedEvent = EventFactory.getSelectedEventInfo();
								  $scope.maxAllowed = selectedEvent.eventDetails.maxNoOfpeopleInAGroup;
								  var amount = parseInt(selectedEvent.eventDetails.amountPerPerson);
								  $scope.totalAmount = 0;
								  $scope.addedCount =0;
									$scope.closeDialog = function(){
										enrollDialog.close();
									  };
									  
									  $scope.addDetails=function(){
										  $scope.personDetailsObject.push({'name':$scope.name,'phone':$scope.phone,'email':$scope.email});
										  $scope.name="";
										  $scope.phone="";
										  $scope.email="";
										  $scope.addedCount  =  $scope.addedCount +1;
										  $scope.totalAmount =  $scope.totalAmount + amount;
									  };
									  
									  $scope.deleteDetails=function(index){
										  $scope.personDetailsObject.splice(index,1);
										  $scope.addedCount  =  $scope.addedCount  -1;
										  $scope.totalAmount =  $scope.totalAmount - amount;
									  };
							}
						};
						$scope.openDialog = function() {
							enrollDialog= $dialog.dialog($scope.opts);
							enrollDialog.open().then(function(result) {
								if (result) {
									console.log('dialog closed with result: ' + result);
								}
							});
						};
						$scope.openDialog();
					};
				$scope.closeDialog = function(){
					eventInfoDialog.close();
				  };
				  $scope.enroll = function() {
					eventInfoDialog.close();
					$scope.openEnrollDialog();
				};
				
				
				
					  
			}
		};
		$scope.openDialog = function() {
			eventInfoDialog= $dialog.dialog($scope.opts);
			eventInfoDialog.open().then(function(result) {
				if (result) {
					console.log('dialog closed with result: ' + result);
				}
			});
		};
		$scope.openDialog();
	};
	
	
	
		  
		 
	
	
/*
	 function initializeSlideSettings(){
		 // $scope.myInterval = 0;
		  var slides = $scope.slides = [];
		  $scope.eventObjects = [];
		  $scope.events = [];
		  $scope.addSlide = function(event) {
			var eventType = event.eventType; 
			var eventId = event.eventData.eventId;
		    var imageUrl = event.eventData.url;
		    var eventName = event.eventData.eventName;
		    var eventTime = event.eventData.time;
		    slides.push({
		      image: imageUrl,
		      eventName: eventName,
		      eventTime : eventTime,
		      eventId : eventId
		    });
		  };
		  var cnt = 1;
		  for (var i=0; i<events.length; i++) {
		    $scope.addSlide(events[i]);
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
	*/ 
	 

//	if(!EventFactory.eventData.hasOwnProperty("events")){
	var events = [];
	var promise = EventFactory.getEventData();
	promise.then(function(eventData) {
		EventFactory.eventData = eventData.events;
		$scope.eventsData = eventData.events;
	}, function(reason) {
		console.log('Failure: '+reason);
	});
	 
	//}
	
});