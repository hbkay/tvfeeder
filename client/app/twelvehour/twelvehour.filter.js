'use strict';

angular.module('tvfeeder')
  .filter('twelvehour', function() {
    // time arg is something like: 18:00:00
    return function (time) {
      return twentyFourToTwelve(time);
    }
  });


function twentyFourToTwelve (airTime) {
    var hours =     parseInt(airTime.split(':')[0], 10);
    var minutes =   parseInt(airTime.split(':')[1], 10);
    var ampm = 'am'

    if(ampm.toUpperCase() === "PM" && hours<12) hours = hours+12;
    if(hours >= 12) {
        hours = (hours - 12 ? hours - 12 : 12);
        ampm = 'pm';
    } else if (hours == 0) {
        hours = 12;
    }

    return (hours ? hours : '00') + ':' + 
    (minutes ? minutes : '00') + ' ' + 
    ampm;
}