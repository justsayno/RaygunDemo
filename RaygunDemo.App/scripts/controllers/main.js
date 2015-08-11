'use strict';

/**
 * @ngdoc function
 * @name raygunDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raygunDemoApp
 */
angular.module('raygunDemoApp')
  .controller('MainCtrl', function ($scope, errorService) {
      var vm = this;
      vm.throwUnhandledException = function () {
          errorService.throwUnhandledException();
      };

      vm.tryCatchAndSendWithRaygun = function () {
          errorService.tryCatchAndSendWithRaygun();
      };

      vm.sendWithUserInfo = function () {
          errorService.sendWithUserInfo();
      };

      vm.sendWithCustomData = function () {
          errorService.sendWithCustomData();
      }

      vm.throwErrorCatch = function () {

      };

  });
