'use strict';

/**
 * @ngdoc function
 * @name raygunDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the raygunDemoApp
 */
angular.module('raygunDemoApp')
  .controller('ProductCtrl', function ($scope, productResource) {
      var vm = this;
      productResource.query({},
      function (data) {
          vm.products = data;
      });
  });
