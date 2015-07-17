'use strict';

describe('Filter: switchcase', function () {

  // load the filter's module
  beforeEach(module('fooApp'));

  // initialize a new instance of the filter before each test
  var switchcase;
  beforeEach(inject(function ($filter) {
    switchcase = $filter('switchcase');
  }));

  it('should return the input in switchcase', function () {
    var text = 'angularjs hello';
    expect(switchcase(text)).toBe('AnGuLaRjS hElLo');
  });

});
