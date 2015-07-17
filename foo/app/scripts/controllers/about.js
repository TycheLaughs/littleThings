'use strict';

/**
 * @ngdoc function
 * @name fooApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the fooApp
 */
angular.module('fooApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


    $scope.arrLength = function (collection) {
      return collection.length;
    };


  });
