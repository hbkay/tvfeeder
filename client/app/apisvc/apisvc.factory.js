'use strict';

angular.module('tvfeeder')
  .factory('apiSvc', function($http) {
    // date arg passed is always a string (eg: '2015-02-25')
    return {
      nextListing: function (date) {
        var url = '/nextlisting/' + date;
        var promise = $http.get(url);

        return promise;
      },
      prevListing: function (date) {
        var url = '/prevlisting/' + date;
        var promise = $http.get(url);

        return promise;
      },
      shows: function (date) {
        var url = '/listing/' + date;
        var promise = $http.get(url);

        return promise;
      }
    };
  });
