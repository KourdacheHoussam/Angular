'use strict';

describe('Filter: newfilter', function () {

  // load the filter's module
  beforeEach(module('angularTutorialApp'));

  // initialize a new instance of the filter before each test
  var newfilter;
  beforeEach(inject(function ($filter) {
    newfilter = $filter('newfilter');
  }));

  it('should return the input prefixed with "newfilter filter:"', function () {
    var text = 'angularjs';
    expect(newfilter(text)).toBe('newfilter filter: ' + text);
  });

});
