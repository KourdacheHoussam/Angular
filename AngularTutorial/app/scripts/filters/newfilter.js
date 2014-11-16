'use strict';

/**
 * @ngdoc filter
 * @name angularTutorialApp.filter:newfilter
 * @function
 * @description
 * # newfilter
 * Filter in the angularTutorialApp.
 */
angular.module('angularTutorialApp')
  .filter('newfilter', function () {
    return function (input) {
      return 'newfilter filter: ' + input;
    };
  });
