'use strict';

cntManager.directive('marqueeZone', [ function() {
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: [ '$scope', '$timeout', function($scope, $timeout){

      $(document).ready(function(){

      });
      // ================================================================================================================
      // Initial variables
      // ----------------------------------------------------------------------------------------------------------------
      var getDivMarquee       = $('.marqueetext'),
          getInputMesssage    = $('#input-message-text'),
          getInputTransition  = $('#input-message-transition'),
          getAlertMarquee     = $('.alert-marquee');

      // Transitions 
      var ctlText  = 'You can send message in this section, just change the message below and see what happens.',
          ctrTransition = 16;

      var ctrInput1 = 1,
          ctrInput2 = 1,
          ctrInput3 = 1;
      // ================================================================================================================
      // Get val (text from input tag) and save in the crlText variable to update the message in the TV
      // ----------------------------------------------------------------------------------------------------------------
      $scope.changeMessage = function(){
        ctlText       = getInputMesssage.val();
        ctrTransition = getInputTransition.val();

        if( ctrTransition === '' || isNaN(ctrTransition) ) { ctrInput1 = 0; }
        if( ctlText === '') { ctrInput2  = 0; }
        ctrInput3 = ctrInput1 * ctrInput2;

        if( ctrInput3 === 0 ) {
          ctlText  = 'You can send message in this section, just change the message below and see what happens.',
          ctrTransition = 16;
          getAlertMarquee.css('display', 'block');
        } 
        
        getAlertMarquee.css('display', 'none');

        getInputMesssage.val(' ');
        getInputTransition.val(' ');
      };
      // ================================================================================================================
      // Function that update the new text in the marquee
      // ----------------------------------------------------------------------------------------------------------------
      function scroll(){
        getDivMarquee.html('').text(ctlText);
        getDivMarquee.css({
          '-webkit-animation': "scroll " + ctrTransition+'s'+ " normal linear",
          '-moz-animation': "scroll " + ctrTransition+'s'+  " normal linear",
          '-ms-animation': "scroll " + ctrTransition+'s'+ " normal linear",
          'animation': "scroll " + ctrTransition+'s'+ " normal linear"
        });
      }
      scroll();
      // ================================================================================================================
      // Event that update or refresh the maruqee transition 
      // ----------------------------------------------------------------------------------------------------------------
      getDivMarquee.on('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
        getDivMarquee.css({
          '-webkit-animation': "",
          '-moz-animation': "",
          '-ms-animation': "",
          'animation': ""
        });
        $timeout( scroll, 500);
      });
    }],
    controllerAs: 'marquee',
    templateUrl: 'components/home/signage/marquee/marquee.tpl.html'
  };
}]);