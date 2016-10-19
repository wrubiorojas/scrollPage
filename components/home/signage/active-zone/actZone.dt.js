'use strict';

cntManager.directive( 'activeZone', [function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: ['$scope', function($scope){
      // Set time in the variable to every item create
      var timeItem = [ '', '', '' ],
          ctrTime  = 0;
      // Get total of items in the carousel
      var getFatherItem = $('#carousel-active-zone .active-zone-items'),
          getTotalItems = getFatherItem.children().length;
      // Stop the  automatically cycle of the carousel
      $('#carousel-active-zone').carousel({ interval: false });
      // Get item1, the video item to play video
      function getVideo() {
        setTimeout( function(){
          // Getting the video item
          var getVideoItem = $('#carousel-active-zone .active-zone-items div.item1 video'),
              getDuration  = String(getVideoItem[0].duration);
          if( getDuration == 'NaN'){
            getVideo();
          } else {
            timeItem[0] = parseInt ( getVideoItem[0].duration * 1000 ) - 2000;
            getVideoItem[0].play();
            nextSlide();
          }
        }, 100);
      }
      getVideo();
      // Start and control the carousel transition
      function nextSlide() {
        var clearTime = setTimeout( function(){
          // Controls the carousel loop to start again the transition from item1
          ctrTime++;
          if( ctrTime >= getTotalItems ){ ctrTime = 0; }
          // Get the next item to show in the carousel
          $('#carousel-active-zone').carousel('next');
          var getNextItem = $('#carousel-active-zone .active-zone-items div.item'+ (ctrTime + 1) ),
              getTagName  = getNextItem.children()[0].tagName;
          // Ask if the next item is a tag video
          if(  getTagName == 'VIDEO' ){ 
            var getVideo = getNextItem.children();
            timeItem[ctrTime] = parseInt ( getVideo[0].duration * 1000 ) - 2000;
            getVideo[0].play(); 
          }
          // Clear Timeout and call the nextSlide function
          clearTimeout( clearTime );
          nextSlide();
        }, timeItem[ctrTime]);
      }
    }],
    controllerAs: 'actZone',
    templateUrl: 'components/home/signage/active-zone/actZone.tpl.html'
  };
}]);