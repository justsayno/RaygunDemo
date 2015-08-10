'use strict';

/**
 * @ngdoc function
 * @name raygunDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raygunDemoApp
 */
angular.module('raygunDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
