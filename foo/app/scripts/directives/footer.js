'use strict';

/**
 * @ngdoc directive
 * @name fooApp.directive:footer
 * @description
 * # footer
 */
angular.module('fooApp')
  .directive('footer', function (){
    return{
      restrict: 'E',
      replace: true,
      template:'<div class="footer text-center row"><span class=col-xs-5">Footer Text</span></div>',
      controller: 'todoCtrl'
    };
  });
