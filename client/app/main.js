'use strict';

// Declare app level module which depends on views, and components
angular.module('tvfeeder', [
  'ngRoute'
])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/'});

  $locationProvider.html5Mode(false);
}]);

console.log('Welcome to Yeogurt!');
