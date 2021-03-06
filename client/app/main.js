'use strict';

// Declare app level module which depends on views, and components
angular.module('tvfeeder', [
  'ngRoute',
  'ngAnimate'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(false);
}]);
