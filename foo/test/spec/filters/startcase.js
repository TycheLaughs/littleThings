'use strict';

describe('Filter: startcase', function () {

  // load the filter's module
  beforeEach(module('fooApp'));

  // initialize a new instance of the filter before each test
  var startcase;
  beforeEach(inject(function ($filter) {
    startcase = $filter('startcase');
  }));

  it('should return the input prefixed with "startcase filter:"', function () {
    var text = 'angularjs is great';
    expect(startcase(text)).toBe('Angularjs Is Great');
  });

});
