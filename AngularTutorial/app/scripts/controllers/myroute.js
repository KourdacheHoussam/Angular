'use strict';

/**
 * @ngdoc function
 * @name angularTutorialApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the angularTutorialApp
 */
angular.module('angularTutorialApp')
  .controller('MyrouteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
