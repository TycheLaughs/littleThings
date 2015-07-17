'use strict';

/**
 * @ngdoc filter
 * @name fooApp.filter:startcase
 * @function
 * @description
 * # startcase
 * Filter in the fooApp.
 */
angular.module('fooApp')
  .filter('startcase', function (){
    return function (string){
      var foundPunc = true;
      var startString = '';
      var i = 0;
      if(string.trim() !== ''){
        for(i = 0; i< string.length; i++){
          if(foundPunc){
            if(string[i] !== ' ' && string[i] !== '.' && string[i] !== '?' && string[i] !== '!'){
              startString += string[i].toUpperCase();
              foundPunc = false;
            }
            else{
              startString += string[i];
            }


          }
          else{
            startString += string[i];
            if(string[i] === '.' || string[i] === ' '||string[i] === '?' || string[i] === '!'){
              foundPunc = true;
            }
          }
        }
      }
      return startString;
    }
  });
