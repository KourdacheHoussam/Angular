'use strict';

/**
 * @ngdoc filter
 * @name angularTutorialApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularTutorialApp.
 */
angular.module('angularTutorialApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
