'use strict';

describe('Filter: camelcase', function () {

  // load the filter's module
  beforeEach(module('fooApp'));

  // initialize a new instance of the filter before each test
  var camelcase;
  beforeEach(inject(function ($filter) {
    camelcase = $filter('camelcase');
  }));

  it('should return the input in camelcase', function () {
    var text = 'angular js';
    expect(camelcase(text)).toBe('angularJs');
  });

});
