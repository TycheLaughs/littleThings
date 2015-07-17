'use strict';

/**
 * @ngdoc filter
 * @name fooApp.filter:camelcase
 * @function
 * @description
 * # camelcase
 * Filter in the fooApp.
 */
angular.module('fooApp')
  .filter('camelcase', function (){
  return function(string){
    var j = 0;
    var i = 0;
    var foundSpace = false;
    var cameledString = '';
    if(string.trim() !== ''){
      for(i = 0; i< string.length; i++, j++){
        if(foundSpace){
          if(string[i] !== ' ' && string[i] !== '-' && string[i] !== '_'){
            cameledString += string[i].toUpperCase();
            foundSpace = false;
          }
        }
        else{
          if(string[i] !== ' ' && string[i] !== '-' && string[i] !== '_'){
            cameledString += string[i];
          }
          else{
            foundSpace = true;
          }
        }
      }
    }
    return cameledString;
  }
});
