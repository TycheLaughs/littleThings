'use strict';

describe('Controller: todoCtrl', function () {

  // load the controller's module
  beforeEach(module('fooApp'));

  var TodoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodoCtrl = $controller('todoCtrl', {
      $scope: scope

      // place here mocked dependencies
    });

  }));




  it('should attach an empty list to the scope', function () {
    expect(scope.list.length).toBe(0);
  });

  it('should have a function to add a task to the list', function () {
    scope.inp = 'task';
    scope.createTask();
    expect(scope.list.length).toBe(1);
    expect(scope.list[0].text).toBe('task');
  });
/*
  it('should call the createTask function on a press of the "enter" key', function () {
    scope.inp = 'task';
   //how to simulate keypress..?
    scope.pressedKey(e);
    expect(scope.list.length).toBe(1);
    expect(scope.list[0].text).toBe('task');

  });*/

  it('should update the task list to mark items as done when their checkbox is checked', function () {
    scope.inp = 'task';
    scope.createTask();
    scope.checkToggler(0);
    expect(scope.list[0].done).toBe(true);
    scope.checkToggler(0);
    expect(scope.list[0].done).toBe(false);
  });
  it('should remove checked items when the removal function is called', function () {
    scope.inp = 'task';
    scope.createTask();
    scope.checkToggler(0);
    scope.removeChecked();
    expect(scope.list.length).toBe(0);
  });
  it('should remove all items from the list when the correct function is called, regardless of checked state', function () {
    scope.inp = 'task1';
    scope.createTask();
    scope.inp = 'task2';
    scope.createTask();
    scope.inp = 'task3';
    scope.createTask();
    scope.clearList();
    expect(scope.list.length).toBe(0);

  });
  it('should be able to detect if any items at all have been completed', function (){
    scope.inp = 'task1';
    scope.createTask();
    scope.inp = 'task2';
    scope.createTask();
    scope.inp = 'task3';
    scope.createTask();
    scope.checkToggler(1);

    expect(scope.list.some(scope.findChecked)).toBe(true);

  });

});
