'use strict';

/**
 * @ngdoc function
 * @name fooApp.controller:todoCtrl
 * @description
 * # TodoctrlCtrl
 * Controller of the fooApp
 */
angular.module('fooApp')
  .controller('todoCtrl', function ($scope){
    $scope.list = [];

    $scope.findChecked = function (element, index, array){
      return element.done == true;
    };

    $scope.pressedKey = function(e){
      if(e.which== 13){
        $scope.createTask();
      }
    };

    $scope.createTask = function (){
      var task = {};
      var text = $scope.inp.trim ();
      if(text !== ''){
        task.text = text;
        task.done = false;
        task.created = new Date ();
        $scope.list.push(task);
      }
      $scope.inp = '';
      //$scope.inp is the input box used as a model for the task preview
      return $scope.list;
    };

    $scope.checkToggler = function (index){
      if($scope.list[index].done === true){
        $scope.list[index].done = false;
      }
      else {
        $scope.list[index].done = true;
      }
    };

    $scope.removeChecked = function (){
      console.log('removing checked items...');
      var initialLength = $scope.list.length;
      var i = 0;
      for(i = initialLength-1; i >= 0; i--){
        if($scope.list[i].done == true){
          $scope.list.splice(i, 1);

        }
      }
    };

    $scope.clearList = function (){
      console.log('clearing list...');
      while($scope.list.length > 0){
        $scope.list.pop();
      }
      setTimeout(function(){
        document.getElementById('input-todo').focus();
      }, 500);
    };

  });
