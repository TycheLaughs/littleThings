'use strict';

describe('Directive: footer', function () {

  // load the directive's module
  beforeEach(module('fooApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make footer placeholder-type element', inject(function ($compile) {
    element = angular.element('<footer></footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('Footer Text');
  }));




});
