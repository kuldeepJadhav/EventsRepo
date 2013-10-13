function StreamsController($scope, $http) {
	
	//var url = '../api/json/streams/stream-list.json';
	//$http.get(url).success(function(streamsList) {
	//	$scope.streams.list = streamsList.data.streams;
	//	console.log("Streams obtained : " + $scope.streams.list );
	//});
	console.log('Invoked streams controller function...');
	//console.log(testJson.data.streams);
	
	
	$scope.closeStream = function(index) {
		console.log("clicked");
	};
}

describe('Test case for streamsController', function() {

	console.log('Entering the test case for streams controller.........');
	describe('StreamsController', function() {
		var scope;
		beforeEach(inject(function($rootScope, $controller,$compile) {
			scope = $rootScope.$new();
			var testJson = {
					  "status": "SUCCESS",
					  "data": {
					    "streams": [
					      {
					        "type": "facebook",
					        "title": "Wall Posts",
					        "subTitle": "(Excellence Motor)"
					      },
					      {
					        "type": "facebook",
					        "title": "Event",
					        "subTitle": "(Excellence Motor)"
					      },      
					      {
					        "type": "twitter",
					        "title": "Mentions",
					        "subTitle": "(@TestingDealerBi)"
					      },
					      {
					        "type": "google",
					        "title": "Home Feed",
					        "subTitle": "(Excellence Motor)"
					      }      
					    ]
					  },
					  "messages": {
					    "infoMessage": "3 streams found"
					  },
					  "error": null
					};
			
			scope.streams = testJson.data.streams;
			var streamHtml = '<div class="stream" ng-repeat="stream in streams" >'+
	    	'<div stream-header class="stream-header" type="stream.type" close="closeStream($index)">'+
	    		'<button ng-id="button{{stream.title}}"/> '
	    		'<span class="title">{{stream.title}}</span>' +
	    		'<span class="sub-title">{{stream.subTitle}}</span>'+
	    	'</div> </div>';
	
			 //get the jqLite or jQuery element
		      elem = angular.element(streamHtml);
		      
		      //compile the element into a function to 
		      // process the view.
		       compiled = $compile(elem);
		      
		      //run the compiled view.
		      compiled(scope);
		      
		      //call digest on the scope!
		      scope.$digest();
			
			
			var ctrl = $controller(StreamsController, {
				$scope : scope,
			});
		}));

		it('total streams test', function() {
			console.log('In first test .........');
			console.log("streams " + scope.streams);
			expect(scope.streams.length).toBe(4);
		});
		
	});
});