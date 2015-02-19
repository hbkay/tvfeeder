'use strict';

angular.module('tvfeeder')
  .config(function($routeProvider) {

    $routeProvider
      .when('/', {
        templateUrl: '/app/home/home.html',
        controller: 'HomeCtrl',
        resolve: {
          thisDaysShows:  thisDaysShows,
          nextListing:    getNextlisting,
          prevListing:    getPrevlisting
        }
      });
  });


// passes through resolve
function thisDaysShows ($filter, $route, apiSvc) {

  var date = $route.current.params.date || new Date();
  var todaysDate = $filter('date')(date, 'yyyy-MM-dd');

  return apiSvc.shows(todaysDate);
}

function getNextlisting ($filter, $route, apiSvc) {
  var date = $route.current.params.date || new Date();
  var todaysDate = $filter('date')(date, 'yyyy-MM-dd');

  return apiSvc.nextListing(todaysDate);
}

function getPrevlisting ($filter, $route, apiSvc) {
  var date = $route.current.params.date || new Date();
  var todaysDate = $filter('date')(date, 'yyyy-MM-dd');

  return apiSvc.prevListing(todaysDate);
}