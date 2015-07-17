'use strict';

/**
 * @ngdoc filter
 * @name fooApp.filter:sentencecase
 * @function
 * @description
 * # sentencecase
 * Filter in the fooApp.
 */
angular.module('fooApp')
  .filter('sentencecase',function (){
    return function (string){
      var foundPunc = true;
      var i = 0;
      var sentenceString = '';
      if(string.trim() !== ''){

        for(i = 0; i< string.length; i++){
          if(foundPunc){
            if(string[i] !== ' ' && string[i] !== '.' && string[i] !== '?' && string[i] !== '!'){
              sentenceString += string[i].toUpperCase();
              foundPunc = false;
            }
            else{
              sentenceString += string[i];
            }


          }
          else{
            sentenceString += string[i];
            if(string[i] === '.' || string[i] === '?' || string[i] === '!'){
              foundPunc = true;
            }
          }
        }
      }
      return sentenceString;
    }
  });
