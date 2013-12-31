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
		function($scope,$dialog,$location,EventFactory) {
	console.log("In content controller");
	//$( "#contentsdiv1" ).hide();
	$scope.calendarView = false;
	$scope.loadedCalendarData = false;
	/*
	 * function to toggle between calendar and template view
	 * */
	$scope.toggleViews = function(){
			$scope.calendarView  = true;
			//$('#view-button').html('Show Template View');
			//$('#calendar').show();
			//$('#template-View').hide();
			var calData = EventFactory.getDataForCalendarView();
			$location.path('/calenderview');
				$scope.loadedCalendarData = true;
		
	};
	
	
	$scope.mouseOutDiv = function(id){
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		 $( "#"+divId ).hide();
		 $( "#"+imageDivId ).show();
		 $("#"+'content-social-logos-'+id).hide();
		 
		 //box-shadow: 15px 15px 10px rgb(107, 91, 67);
	};
	
	$scope.mouseOverDiv = function(id){
		var divId = "contentsdiv"+id;
		var imageDivId = "imagediv"+id;
		$( "#"+divId ).show();
		 $( "#"+imageDivId ).hide();
		 $( "#"+divId ).css( "visibility" ,"");
		 $("#"+'content-social-logos-'+id).show();
	};
	
	/**
	 * Function responsible to show the event info dialog.
	 */
	
	var eventInfoDialog ; 
	var enrollDialog;
	$scope.openEventInfoDialog = function(eventId) {
		EventFactory.selectedEventId = eventId;
		$scope.eventOpts = {
			backdrop : true,
			keyboard : true,
			backdropClick : true,
			templateUrl : 'public/views/event-info.html',
			controller : function($scope){
				var eventData = EventFactory.getSelectedEventInfo();
				$scope.eventData = eventData;
				$scope.eventId = $scope.eventData.eventId;
				//if(typeof stLight != 'undefined')
				//stLight.options({publisher: "82e78d9f-fba7-4297-89c8-2db6513f3e2f", doNotHash: false, doNotCopy: false, hashAddressBar: false});
				$scope.showCommentsSection = function(){
					$( "#comment-div" ).show( 'scale', { to: { width: 280, height: 185 } }, 500);
				};
				
				
				$scope.tooltip =  {
					  "title": "Hello Popover<br />This is a multiline message!",
					  "saved": false
					}
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
								  $scope.eventName = selectedEvent.eventName;
								  $scope.eventDate = selectedEvent.eventDetails.time;
								  $scope.maxAllowed = parseInt(selectedEvent.eventDetails.maxNoOfpeopleInAGroup);
								  var amount = parseInt(selectedEvent.eventDetails.amountPerPerson);
								  $scope.totalAmount = 0;
								  $scope.addedCount =0;
								  $scope.trackCount = 0;
									$scope.closeDialog = function(){
										enrollDialog.close();
									  };
									  
									  $scope.addDetails=function(){
										  
										  if($scope.addedCount < $scope.maxAllowed ){
											  $scope.personDetailsObject.push({'name':$scope.name,'phone':$scope.phone,'email':$scope.email});
											  $scope.name="";
											  $scope.phone="";
											  $scope.email="";
											  $scope.addedCount  =  $scope.addedCount +1;
											  $scope.totalAmount =  $scope.totalAmount + amount;
										  }
										  $scope.trackCount ++;
									  };
									  
									  $scope.deleteDetails=function(index){
										  $scope.personDetailsObject.splice(index,1);
										  $scope.addedCount  =  $scope.addedCount  -1;
										  $scope.totalAmount =  $scope.totalAmount - amount;
										  if( $scope.trackCount >   $scope.maxAllowed){
											  $scope.trackCount = $scope.maxAllowed;
										  }
										  $scope.trackCount --;
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
			eventInfoDialog= $dialog.dialog($scope.eventOpts);
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
	EventFactory.getEventData(function(eventData){
		EventFactory.eventData = eventData.events;
		$scope.eventsData = eventData.events;
	});

	 
	//}
	
});