'use strict';

describe('Controller: dashCtrl', function () {

  // load the controller's module
  beforeEach(module('fooApp'));

  var dashCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    dashCtrl = $controller('dashCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should initialize and empty string to receive input', function () {
    expect(scope.enteredName).toBe('');
  });



  it('should have a Boolean to control visibility of the twp parts of the header', function (){
    expect(scope.vanishTheBox).toBe(false);

  });
  it('should have a function to toggle Boolean that changes visibility of parts of the header when enteredName is not 0', function (){
    scope.enteredName = 'Elvira';
    scope.nameLength();
    expect(scope.vanishTheBox).toBe(true);

  });
});
