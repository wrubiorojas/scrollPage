'use strict';

var cntManager = angular.module( 'vmSignage', ['ngResource', 'ui.router'] );

cntManager.config(['$provide', '$stateProvider', '$httpProvider', '$urlRouterProvider',function($provide, $stateProvider, $httpProvider, $urlRouterProvider) {
  
  // Default web without authenticate
  $urlRouterProvider.otherwise('/home');
  // Web Routes
  $stateProvider
    .state( 'home', {
      url: '/home',
      templateUrl: 'components/home/home.tpl.html'
    });
}]);