'use strict';
angular.module('smmApp').directive('userCommentsSection' ,function (EventFactory) {
  return {
    restrict:'E',
    templateUrl:'public/views/user-comments-section.html', 
    transclude:true,
    replace:true,
    link: function(scope, iElement, iAttrs) { 
    	var comments = [];
    	var comment = {
    			name : 'Kuldeep',
    			email : 'kulssss',
    			text : 'Really cool event...............'
    	};
    	comments.push(comment);
    	scope.comments = comments;
    	
    	
    	scope.addComment  = function(){
    		var comment = {
        			name :scope.name,
        			email : scope.email,
        			text : scope.newComment
        	};
    		scope.comments.push(comment);
    	}
    }
  };
});

