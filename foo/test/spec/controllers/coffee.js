'use strict';

describe('Controller: coffeeCtrl', function () {

  // load the controller's module
  beforeEach(module('fooApp'));

  var coffeeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    coffeeCtrl = $controller('coffeeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of beverages to the scope', function () {
    expect(scope.beverages.length).toBe(5);
  });
  it('should initialize a number of empty strings to accept later input', function () {
    expect(scope.drink).toBe('');
    expect(scope.drinkType).toBe('');
    expect(scope.drinkPrice).toBe('');
    expect(scope.drinkCaff).toBe('');


  });
  it('should set a Boolean to determine if users have clicked to view the beverage list editor', function () {
    expect(scope.hideToggle).toBe(true);

  });

  it('should have a function to add beverages to the list', function (){
    scope.drink = 'new drink';
    scope.drinkType = 'coffee';
    scope.drinkPrice = '9';
    scope.drinkCaff = '10';
    scope.updateCaffeine();
    expect(scope.beverages.length).toBe(6);
    expect(scope.beverages[5].drink).toBe('new drink');

  });

  it('should toggle the beverage editor Boolean when called to do so', function (){
    scope.hideToggle = true;
    scope.toggleEditor();
    expect(scope.hideToggle).toBe(false);
    scope.toggleEditor();
    expect(scope.hideToggle).toBe(true);

  });

});
