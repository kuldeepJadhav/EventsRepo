'use strict';
function calendarContentMainController($scope, $timeout, $filter,EventFactory,$dialog) {
	
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
	
	$scope.timeZone = 'EST';
	$scope.showCalendar = false;
	$scope.calendarIconListView = 'calendar-list-on';
	$scope.calendarIconDayView = 'calendar-day-off';
	$scope.calendarIconWeekView = 'calendar-week-off';
	$scope.calendarIconMonthView = 'calendar-month-off';
	
	$scope.switchCalendar = function(view) {
		if(view != 'list'){
			$timeout(function() {
				$scope.calendar.fullCalendar('changeView', view);
			});		
		}
		showCalendar(view);
	};

	var showCalendar = function(view) {
		$scope.showCalendar = !(view == 'list');
		if(view === 'list'){
			$scope.calendarIconListView = 'calendar-list-on';
		}else{
			$scope.calendarIconListView = 'calendar-list-off';
		}
		if(view === 'agendaDay'){
			$scope.calendarIconDayView = 'calendar-day-on';
			$timeout(function() {
				drawCurrentTimeline(view);
			}, 100);		
		}else{
			$scope.calendarIconDayView = 'calendar-day-off';
		}
		if(view === 'agendaWeek'){
			$scope.calendarIconWeekView = 'calendar-week-on';
		}else{
			$scope.calendarIconWeekView = 'calendar-week-off';
		}
		if(view === 'month'){
			$scope.calendarIconMonthView = 'calendar-month-on';
		}else{
			$scope.calendarIconMonthView = 'calendar-month-off';
		}
	};//end showCalendar
	
    var drawCurrentTimeline = function(view) {
	    var curTime = new Date();
        var parentDiv = $(".fc-agenda-slots:visible").parent();
        var timeline = parentDiv.children(".timeline");
        if (timeline.length == 0) { //if timeline isn't there, add it
            timeline = $("<hr>").addClass("timeline");
            parentDiv.prepend(timeline);
        }
        timeline.show();
        var curSeconds = (curTime.getHours() * 60 * 60) + (curTime.getMinutes() * 60) + curTime.getSeconds();
        var percentOfDay = curSeconds / 86400; //24 * 60 * 60 = 86400, # of seconds in a day
        var topLoc = Math.floor(parentDiv.height() * percentOfDay);
        timeline.css("top", topLoc + "px");
    };//end drawCurrentTimeline
    
	var getWeekRange = function(date){
		var weekEndDate = new Date(date.getTime());
		weekEndDate.setDate(date.getDate() + 6);
		return $filter('date')(date, "MMM d") + ' - ' + $filter('date')(weekEndDate, "MMM d");
	};
	/* week number e.g. Dec 29 - Jan 4 */
	var weekNumberCalculationFunction = function(date){
	    return getWeekRange(date);
	};
    /* event source that calls a function on every view switch */
//    var eventsFunction = function(start, end, callback) {
//    	console.log("### eventsFunction");
//    	callback($scope.eventSources);
//    };
	//FIXME $scope.eventsFunction = function( need to replace with var eventsFunction = function(
    $scope.eventsFunction = function(start, end, callback) {
    	callback($scope.eventSources);
    };
    /* Event Render */
    var eventRenderFunction = function(event, element) {
        console.log("### onEventRender");
        var id = event.id;
        //openEventInfoDialog
        element.append("<a ng-click=\"openEventInfoDialog('"+id+"')\">go</a>");
        //element.attr('ng-click',');
        //PublisherData.fetchedPublisherList
        //element.find(".fc-event-title").after($("<span class=\"fc-event-icons\"></span>").html("<img src=\"/images/pass.png\" />"));
    };
    /* on day click */
    var dayClickFunction = function( date, allDay, jsEvent, view ){
        $scope.$apply(function(){
          $scope.alertMessage = ('Day Clicked ' + date);
        });
        //$scope.$popover();
    };
    /* on event click */
    var eventClickFunction = function( calEvent, jsEvent, view ){
        $scope.$apply(function(){
          $scope.alertMessage = ('Event: ' + calEvent.title);
          $scope.alertMessage += ('View: ' + view.name);
        });
    };
    /* on Drop */
    var eventDropFunction = function(event, dayDelta, minuteDelta, allDay, revertFunc, jsEvent, ui, view){
       $scope.$apply(function(){
         $scope.alertMessage = ('Event Droped to make dayDelta ' + dayDelta);
       });
	};
	/* on Resize */
	var eventResizeFunction = function(event, dayDelta, minuteDelta, revertFunc, jsEvent, ui, view ){
       $scope.$apply(function(){
         $scope.alertMessage = ('Event Resized to make dayDelta ' + minuteDelta);
       });
	};  
	
	var eventDayRender = function(date,cell) {
		if ($scope.calendar.fullCalendar('getView').name === 'month') {
			eventMonthDayRender(date,cell);
		}
	};
	
	/**
	 * Add Custom Styling to the month's day cell.
	 */
	var eventMonthDayRender = function(date, cell) {
		var dayDiv = cell.children('div');
		
		// Remove the day number DIV and re-add it after the day's content.
		var monthDayDiv = dayDiv.children('.fc-day-number').get(0);
		dayDiv.remove('.fc-day-number');
		dayDiv.append(monthDayDiv);
		
		// At this point you can a DIV to add a pull down for more if you would like.......

		// Make sure the day is moved to the bottom left.
		dayDiv.children('.fc-day-number').css('float','left');
		dayDiv.children('.fc-day-content').css('height','65px');
	};
	   
    $scope.uiConfig = {
   		 calendar:{
   		        height: 450,
   		        editable: true,
   		        header:{
   		          left: 'prev,today,next title',
   		          center: '',
   		          right: ''
   		        },
   		     eventClick: function(calEvent, jsEvent, view) {

   		        alert('Event: ' + calEvent.title);
   		       // alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
   		        //alert('View: ' + view.name);

   		        // change the border color just for fun
   		        $(this).css('border-color', 'red');
   		  

   		    },
   		        firstDay:1,
   		        weekNumbers: true,
   		        weekNumberCalculation: weekNumberCalculationFunction,
   		        events: $scope.eventsFunction,
   		        eventRender: eventRenderFunction,
   		        dayClick: dayClickFunction,
   		        eventDrop: eventDropFunction,
   		        eventResize: eventResizeFunction,
   		        dayRender: eventDayRender   		      
	        }//end calendar
	    };//end uiConfig
    
    /* event source that contains custom events on the scope */
    
    /* FIXME same function is in publisher-list.js*/
    var fetchPublisherList = function(callback) {
		console.log('calendar-content.js isGetPublisherListEarlierCalled : '+PublisherData.isGetPublisherListEarlierCalled);
		if(PublisherData.isGetPublisherListEarlierCalled){ 	    		
			$scope.publisherList = PublisherData.fetchedPublisherList;
			callback();
		}else{
			PublisherData.getPublisherList($scope.timeZone,
				function fetchData(publisherList) {
					PublisherData.isGetPublisherListEarlierCalled = true;
					if(publisherList !== null) {
						PublisherData.fetchedPublisherList = publisherList.data.model;
						$scope.publisherList = publisherList.data.model;								
					}
					callback();
				}
			);
		}
		console.log('calendar-content.js fetchPublisherList refresh: '+ PublisherData.isGetPublisherListEarlierCalled + ' PublisherList: ' + PublisherData.fetchedPublisherList);								
	};    

    var getEvents = function(){
    	var jsonObj = [];
    	
    	
    	
    	return jsonObj;
    };

    /* event sources array*/
    $scope.eventSources = EventFactory.getDataForCalendarView();
    
}
angular.module('calendarApp').controller('calendarContentMainController',calendarContentMainController);
/* EOF */
