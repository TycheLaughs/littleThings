'use strict';

/**
 * @ngdoc function
 * @name fooApp.controller:coffeeCtrl
 * @description
 * # CoffeectrlCtrl
 * Controller of the fooApp
 */
angular.module('fooApp')
  .controller('coffeeCtrl', function($scope){
    $scope.hideToggle = true;
    $scope.drink = '';
    $scope.drinkType = '';
    $scope.drinkPrice = '';
    $scope.drinkCaff = '';
    $scope.beverages = [
      {
        "drink":"Espresso",
        "type":"coffee",
        "price":"6",
        "caffRating":"8"
      },
      {
        "drink":"Coffee",
        "type":"coffee",
        "price":"4.35",
        "caffRating":"6"
      },
      {
        "drink":"Green Tea",
        "type":"tea",
        "price":"4",
        "caffRating":"2"
      },
      {
        "drink":"Black Tea",
        "type":"tea",
        "price":"3",
        "caffRating":"4"
      },
      {
        "drink":"Soda",
        "type":"soda",
        "price":"2",
        "caffRating":""
      }

    ];

    $scope.updateCaffeine = function(){
      if($scope.drink !== '' && $scope.drinkType !== '' && $scope.drinkPrice !== '' && $scope.drinkCaff !== ''){
        var drinkydrink = {};
        drinkydrink.drink = $scope.drink;
        drinkydrink.type = $scope.drinkType;
        drinkydrink.price = $scope.drinkPrice;
        drinkydrink.caffRating = $scope.drinkCaff;
        $scope.beverages.push(drinkydrink);
        $scope.drink ='';
        $scope.drinkPrice ='';
        $scope.drinkType ='';
        $scope.drinkCaff ='';
      }
    };

    $scope.toggleEditor = function(){
      if($scope.hideToggle == true){
        $scope.hideToggle = false;
      }
      else{
        $scope.hideToggle = true;
      }
    };
  });
