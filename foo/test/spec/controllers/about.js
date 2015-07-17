'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('fooApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });



  it('should have a function arrLength', function(){
    expect(scope.arrLength).toBeDefined();
    var arr = [1, 2, 3, 4];
    expect(scope.arrLength(arr)).toBe(4);
  })
});
