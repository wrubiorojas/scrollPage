'use strict';

cntManager.directive( 'headerZone', [ function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: [ '$scope', '$http', '$timeout', function($scope, $http, $timeout){

      function currentTime() {
        var today   = new Date(),
            month   = today.getMonth()+1,
            day     = today.getDate(),
            hour    = today.getHours(),
            minutes = today.getMinutes(),
            seconds = today.getSeconds(),
            ampm    = '';

        if( hour < 12 ) { 
          if( hour === 0 ){
            hour = 12;
          }
          ampm = 'AM'; 
        } else { 
          if( hour > 12 ) {
            var hFormat = [ 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
            var hresolve  = 23 - parseInt( hour );
            hour = hFormat[ hresolve ];
          }
          ampm = 'PM';
        }

        hour    = checkHour(hour);
        minutes = checkHour(minutes);
        seconds = checkHour(seconds);

        $scope.cDate  = ((''+day).length<2 ? '0' : '') + day + ' - ' + ((''+month).length<2 ? '0' : '') + month + ' - ' + today.getFullYear();
        $scope.cHour  = hour + ':' + minutes + ':' + seconds + ' ' + ampm;

        var clearTime = $timeout( currentTime, 1000 );
        clearTimeout( clearTime );
      }
      currentTime();

      $http.get('http://ipinfo.io').then(function(location){
        $scope.nCity = location.data.city;             
      });

      function checkHour(t){
        if( t < 10 ) { t = '0' + t; }
        return t;
      }

    }],
    controllerAs: 'header',
    templateUrl: 'components/home/signage/header/header.tpl.html'
  };
}]);