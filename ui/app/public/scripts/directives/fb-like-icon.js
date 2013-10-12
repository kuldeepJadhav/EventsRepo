'use strict';
angular.module('smmApp').directive('fbLikeIcon' ,function (EventFactory) {
  return {
    restrict:'E',
    templateUrl:'public/views/fb-like-icon.html', 
    transclude:true,
    replace:true,
    link: function(scope, iElement, iAttrs) { 
    	scope.url="https://developers.facebook.com/docs/plugins/";
    	
    	scope.$watch('url', function(newVal, oldVal) {
    		
    		if(FB){
    			FB.XFBML.parse();
    		}
    		//alert("changed");
    		(function(d, s, id) {
    		  var js, fjs = d.getElementsByTagName(s)[0];
    		  if (d.getElementById(id)) return;
    		  js = d.createElement(s); js.id = id;
    		  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
    		  fjs.parentNode.insertBefore(js, fjs);
    		}(document, 'script', 'facebook-jssdk'));
  		
  		//facebook comments
         // var isFacebook = $.find('.fb-comments');
          //if(isFacebook != 'undefined' ) {
             /* var scriptText = 'FB.XFBML.parse();';
              var scriptNode = document.createElement('script');
              scriptNode.appendChild(document.createTextNode(scriptText));
              contentNode.appendChild(scriptNode);    */
          	//FB.XFBML.parse();
          //} 
    	});
    		
    	
    }
  };
});

