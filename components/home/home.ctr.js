'use strict';

cntManager.controller('homeController', ['$scope', function($scope){

  // ================================================================================================================
  // Init ScrollMagic controller
  // ----------------------------------------------------------------------------------------------------------------
  var controller = new ScrollMagic.Controller();
  // build scene
  var scene = new ScrollMagic.Scene({triggerElement: "#trigger"})
  // trigger a velocity opaticy animation
  .setVelocity("#animate", {opacity: 1}, {duration: 800})
  .addTo(controller);
  // ================================================================================================================
  // Init jarallax controller
  // ----------------------------------------------------------------------------------------------------------------
  // build scene
  var scene1 = new ScrollMagic.Scene({triggerElement: "#trigger1"})
    .setVelocity(".third-building1", {translateY: "18%"}, {duration: 800, easing: "linear"})
    .addTo(controller);
  var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger2"})
    .setVelocity(".third-building2", {translateY: "20%"}, {duration: 1000, easing: "linear"})
    .addTo(controller);
  var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger3"})
    .setVelocity(".third-building3", {translateY: "22%"}, {duration: 1200, easing: "linear"})
    .addTo(controller);
  var scene4 = new ScrollMagic.Scene({triggerElement: "#trigger4"})
    .setVelocity(".third-tittle", {opacity: 1}, {duration: 800})
    .addTo(controller);
  var scene5 = new ScrollMagic.Scene({triggerElement: "#trigger5"})
    .setVelocity(".third-vmsignage", {opacity: 1}, {duration: 800})
    .addTo(controller);
  var scene6 = new ScrollMagic.Scene({triggerElement: "#trigger6"})
    .setVelocity(".third-text", {opacity: 1}, {duration: 800})
    .addTo(controller);
    
}]);