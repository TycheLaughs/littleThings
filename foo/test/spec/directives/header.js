'use strict';

describe('Directive: header', function () {

  // load the directive's module
  beforeEach(module('fooApp'));

  var element,
    html,
    scope ;

  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    html = '<div class="header text-center row"><span class=col-xs-5"><span ng-show="vanishTheBox">Hello,</span> {{enteredName}}</span><form ng-show="!vanishTheBox" class="col-xs-6 pull-right"><label>Your name:<input type="text" ng-model="enteredName"  ng-blur="vanishTheBox = true" autofocus/></label></form></div>';
    element = angular.element(html);
    $compile(element)(scope);
    scope.$digest();
  }));
/*
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<header></header>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the header directive');
  }));


  */

  it('should modify the greeting upon an entered name', function (){
    scope.enteredName = 'Elvira';
    scope.vanishTheBox = true;
    scope.$digest();
    expect(element.text()).toBe('Hello, ElviraYour name:');
    //because I'm using a ng-show rather than an ng-if, elements remain in place
    // though not visible, so we get this , smashed-together text


  });

  it('should vanish the input box upon an entered name', function () {
    scope.enteredName = 'Elvira';
    scope.vanishTheBox = true;
    scope.$digest();
    expect(element.find('form:visible').length).toBe(0);
  });
  //not sure how to test visibility of the greeting span
});
