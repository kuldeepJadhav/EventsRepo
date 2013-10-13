function TabsController($scope) {
	$scope.tabs = [
	               { link : '#/streams', label : 'Streams' },
	               { link : '#/administration', label : 'Administration' },
	               { link : '#/content', label : 'Content' }
	             ];
	           $scope.selectedTab = $scope.tabs[0];
	           console.log('Invoked tabs controller function...');
}


describe('Test Controller', function() {
	 
	console.log('Entering the test case for tabs controller.........');
	  describe('TabsController', function() {
	    var scope;
	    beforeEach(inject(function($rootScope, $controller){
	      scope = $rootScope.$new();
	      var ctrl = $controller(TabsController, {$scope: scope});
	    }));
	 

	    it('tabs should be 3', function() {
	    	console.log('In first test .........');
	      expect(scope.tabs.length).toBe(3);
	    });
	    
	    it('selected tab should be the first tab', function() {
	    	console.log('In second test .........');
	      expect(scope.selectedTab).toBe(scope.tabs[0]);
	    });
	 
	    
	  });
});