'use strict';
angular.module('smmApp').directive('twitterShareIcon' ,function (EventFactory) {
  return {
    restrict:'E',
    templateUrl:'public/views/twitter-share-icon.html', 
    transclude:true,
    replace:true,
    link: function(scope, iElement, iAttrs) { 
    	
    	scope.$watch('url', function(newVal, oldVal) {
    		//alert("changed");
    		scope.url="https://developers.facebook.com/docs/plugins/";
    		!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
    		if(!d.getElementById(id)){js=d.createElement(s);js.id=id;
    		js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  		
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

