'use strict';

/**
 * Which url should we use ?
 *  1. http://<domain>/#!home
 *  2. http://<domain>/#/home
 *
 * What to use  $stateProvider, $routeProvider, $urlRouterProvider ?
 * we can also use templateUrl: 'public/views/streams' in place of templateUrl: 'public/views/streams.html'
 * 
 * ['ngCookies','ui.bootstrap.dialog', 'ui.bootstrap.tooltip', 'ui.bootstrap.tpls']
 */
angular.module('smmApp', ['ngCookies','ui.bootstrap.dialog','ui.bootstrap.carousel','ui.bootstrap.tooltip'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'public/views/content.html', controller: 'ContentController'}) 
      .when('/about', {templateUrl: 'public/views/about-us.html', controller: 'ContentController'}) 
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(false);
  });


/*
  var app =  angular.module('smmApp', ['ui.bootstrap']);
  app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {templateUrl: 'public/views/main.html', controller: 'MainController'})
      .when('/module1', {templateUrl: 'public/views/module1.html', controller: 'MainController'})
      .when('/profile', {templateUrl: 'public/views/profile.html', controller: 'MainController'})
      .when('/home', {templateUrl: 'public/views/home.html', controller: 'HomeController'})
      .otherwise({redirectTo: '/'});

      $locationProvider.html5Mode(true);
  });
*/

/*
    angular.module('smmApp', ['ui.state'])
    .config(function($stateProvider, $routeProvider){
    $stateProvider
        .state('index', {
            url: "",
            views: {
                "viewA": {
                    templateUrl: "index.viewA.html"
                },
                "viewB": {
                    templateUrl: "index.viewB.html"
                }
            }
        })
        .state('route1', {
            url: "/route1",
            views: {
                "viewA": {
                    templateUrl: "route1.viewA.html"
                },
                "viewB": {
                    templateUrl: "route1.viewB.html"
                }
            }
        })
        .state('route2', {
            url: "/route2",
            views: {
                "viewA": {
                    templateUrl: "route2.viewA.html"
                },
                "viewB": {
                    templateUrl: "route2.viewB.html"
                }
            }
        })
    })
    */