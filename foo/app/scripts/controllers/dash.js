'use strict';

/**
 * @ngdoc function
 * @name fooApp.controller:dashCtrl
 * @description
 * # DashctrlCtrl
 * Controller of the fooApp
 */
angular.module('fooApp')
  .controller('dashCtrl', function ($scope){
  $scope.enteredName = '';
  $scope.vanishTheBox = false;
  $scope.nameLength = function(){
    if($scope.enteredName.length > 0){
      $scope.vanishTheBox = true;
    }
  };

});


