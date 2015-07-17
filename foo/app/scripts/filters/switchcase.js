'use strict';

/**
 * @ngdoc filter
 * @name fooApp.filter:switchcase
 * @function
 * @description
 * # switchcase
 * Filter in the fooApp.
 */
angular.module('fooApp')
  .filter('switchcase', function (){
    return function (string){
      var switchedText='';
      var swapLogic = 0;
      var foundSpace = false;
      var i = 0;
      if(string.trim() !== ''){
        for(i = 0; i< string.length; i++){
          foundSpace = false;
          if(string[i] === ' '){
            swapLogic ++;
            foundSpace = true;
          }
          if(!foundSpace){
            if(swapLogic % 2){
              if(i % 2){
                switchedText+= string[i].toUpperCase();
              }
              else{
                switchedText+= string[i].toLowerCase();
              }
            }
            else{
              if(i % 2){
                switchedText+= string[i].toLowerCase();
              }
              else{
                switchedText+= string[i].toUpperCase();
              }
            }
          }
          else{
            switchedText += string[i];
          }
        }
      }
      return switchedText;
    }
  });
