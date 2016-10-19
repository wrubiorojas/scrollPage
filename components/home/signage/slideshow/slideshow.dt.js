'use strict';

cntManager.directive( 'slideshowZone', [function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: ['$scope', function($scope){
      // Set time in the variable to every item create
      var timeItem = [ 4000, 5000, 6000 ],
          ctrTime  = 0;
      // Get total of items in the carousel
      var getFatherItem = $('#carousel-slideshow .slideshow-items'),
          getTotalItems = getFatherItem.children().length;
      // Stop the  automatically cycle of the carousel
      $('#carousel-slideshow').carousel({ interval: false });
      // Start and control the carousel transition
      function nextSlide() {
        var clearTime = setTimeout( function(){
          // Controls the carousel loop to start again the transition from item1
          ctrTime++;
          if( ctrTime >= getTotalItems ){ ctrTime = 0; }
          // Get the next item to show in the carousel
          $('#carousel-slideshow').carousel('next');
          var getNextItem = $('#carousel-active-zone .active-zone-items div.item'+ (ctrTime + 1) );
          // Clear Timeout and call the nextSlide function
          clearTimeout( clearTime );
          nextSlide();
        }, timeItem[ctrTime]);
      }
      nextSlide();
    }],
    controllerAs: 'slideshow',
    templateUrl: 'components/home/signage/slideshow/slideshow.tpl.html'
  };
}]);