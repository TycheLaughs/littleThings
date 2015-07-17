'use strict';

/**
 * @ngdoc directive
 * @name fooApp.directive:header
 * @description
 * # header
 */
angular.module('fooApp')
  .directive('header', function (){
    return{
      restrict: 'E',
      replace: true,
      template:'<div class="header text-center row"><span class=col-xs-5"><span ng-show="vanishTheBox">Hello,</span> {{enteredName}}</span><form ng-show="!vanishTheBox" class="col-xs-6 pull-right"><label>Your name:<input type="text" ng-model="enteredName"  ng-blur="vanishTheBox = true" autofocus/></label></form></div>',
      controller: 'dashCtrl'
    };
  });
