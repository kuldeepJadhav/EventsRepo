'use strict';

/**
 * This function is called whenever the content tab HTML is re-loaded by Wicket.
 * It initializes (compiles) the HTML and also the blogContentApp.
 */
angular.module('calendarApp',['ui.calendar','ui.bootstrap', 'ui.bootstrap','ngCookies','ui.bootstrap.dialog']);

angular.module('calendarApp').config(function($routeProvider) {
    
   
});

angular.module('calendarApp').run(function($rootScope,$templateCache,$timeout) {
	
	   $rootScope.$on('$routeChangeSuccess', function(ev,data) {
	     if (data.$$route && data.$$route.controller) {
	       $rootScope.currentRoute = data.$$route.currentRoute;
	     }
	   });

	   $templateCache.put("template/datepicker/datepicker.html",
			    "<table>\n" +
			    "  <thead>\n" +
			    "    <tr class=\"text-center title-bar\">\n" +
			    "      <th><div class=\"pull-left\" ng-click=\"move(-1)\"><i class=\"icon-chevron-left\"></i></div></th>\n" +
			    "      <th colspan=\"{{rows[0].length - 2 + showWeekNumbers}}\"><div class=\"title-button\"><strong>{{title}}</strong></div></th>\n" +
			    "      <th><div class=\"pull-right\" ng-click=\"move(1)\"><i class=\"icon-chevron-right\"></i></div></th>\n" +
			    "    </tr>\n" +
			    "    <tr class=\"text-center\" ng-show=\"labels.length > 0\">\n" +
			    "      <th ng-show=\"showWeekNumbers\">#</th>\n" +
			    "      <th class=\"weekdays\" ng-repeat=\"label in labels\">{{label}}</th>\n" +
			    "    </tr>\n" +
			    "  </thead>\n" +
			    "  <tbody>\n" +
			    "    <tr ng-repeat=\"row in rows\">\n" +
			    "      <td ng-show=\"showWeekNumbers\" class=\"text-center\"><em>{{ getWeekNumber(row) }}</em></td>\n" +
			    "      <td ng-repeat=\"dt in row\" class=\"text-center\">\n" +
			    "        <button type=\"button\" style=\"width:100%;\" class=\"gray-button\" ng-class=\"{'btn-info': dt.selected, 'btn-secondary': dt.secondary}\" ng-click=\"select(dt.date)\" ng-disabled=\"dt.disabled || dt.secondary\"><span ng-class=\"{muted: dt.secondary}\">{{dt.label}}</span></button>\n" +
			    "      </td>\n" +
			    "    </tr>\n" +
			    "  </tbody>\n" +
			    "</table>\n" +
			    "");

	   $templateCache.put("template/datepicker/popup.html",
			    "<ul class=\"dropdown-menu\" ng-style=\"{display: (isOpen && 'block') || 'none', top: position.top+'px', left: position.left+'px'}\" class=\"dropdown-menu\">\n" +
			    "	<li ng-transclude></li>\n" +
			    "</ul>");
	   
	   $templateCache.put("template/timepicker/timepicker.html",
			    "<div class=\"form-inline\">\n" +
			    "		<div class=\"incrementor gradient-h1\" ng-class=\"{'error': invalidHours}\"><input type=\"text\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"span1 text-center gradient-h1\" ng-mousewheel=\"incrementHours()\" ng-readonly=\"readonlyInput\" maxlength=\"2\" />\n" +
			    "        <div class=\"up-down\"> " +
			    "		  <a ng-click=\"incrementHours()\" class=\"btn-up\"><i class=\"icon-chevron-up\"></i></a>\n" +
			    "		  <a ng-click=\"decrementHours()\" class=\"btn-down\"><i class=\"icon-chevron-down\"></i></a>\n" +
			    "		 </div>" +
			    "		</div>" +
			    "		<div class=\"hours-minutes-separator\">:</div>" +
			    "		<div class=\"incrementor gradient-h1\" ng-class=\"{'error': invalidMinutes}\"><input type=\"text\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"span1 text-center gradient-h1\" ng-readonly=\"readonlyInput\" maxlength=\"2\">\n" +
			    "        <div class=\"up-down\"> " +
			    "		  <a ng-click=\"incrementMinutes()\" class=\"btn-up\"><i class=\"icon-chevron-up\"></i></a>\n" +
			    "		  <a ng-click=\"decrementMinutes()\" class=\"btn-down\"><i class=\"icon-chevron-down\"></i></a>\n" +
			    "		 </div>" +
			    "		</div>" +
			    "       <div class=\"incrementor gradient-h1\" ><input type=\"text\" ng-model=\"meridian\" class=\"span1 text-center gradient-h1\" ng-show=\"showMeridian\" ng-readonly=\"readonlyInput\" maxlength=\"2\">" +
			    "       <div class=\"up-down\"> " +
			    "		 <a class=\"btn-up\" ng-show=\"showMeridian\" ng-click=\"meridian=='AM' || toggleMeridian()\"><i class=\"icon-chevron-up\"></i></a>\n" +
			    "		 <a class=\"btn-down\" ng-show=\"showMeridian\" ng-click=\"meridian=='PM' || toggleMeridian()\"><i class=\"icon-chevron-down\"></i></a>\n" +
			    "		</div></div>" +
			    "</div>"
			    );

});

