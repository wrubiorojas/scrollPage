'use strict';

cntManager.directive( 'nvDirective', [function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: ['$scope', function($scope){

    }],
    controllerAs: 'navbar',
    templateUrl: 'components/navbar/navbar.tpl.html'
  };
}]);