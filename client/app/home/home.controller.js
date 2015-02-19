'use strict';

angular.module('tvfeeder')
  .controller('HomeCtrl', function($scope, $routeParams, $filter, thisDaysShows, nextListing, prevListing) {
    var todaysDate = $routeParams.date || new Date();
    $scope.todaysDate = $filter('date')(todaysDate, 'yyyy-MM-dd');

    $scope.nextDate = (nextListing.data[0] ? nextListing.data[0].date : '');
    $scope.prevDate = (prevListing.data[0] ? prevListing.data[0].date : '');
    $scope.shows = thisDaysShows.data;
    
    console.log("Today: ", todaysDate);
    console.log($scope.shows);
    
    $scope.setCurrShow = function(show){
      $scope.currShow = show;
      console.log(show);
    };
  });
