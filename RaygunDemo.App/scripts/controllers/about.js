'use strict';

/**
 * @ngdoc function
 * @name raygunDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raygunDemoApp
 */
angular.module('raygunDemoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
