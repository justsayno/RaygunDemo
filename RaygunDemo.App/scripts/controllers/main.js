'use strict';

/**
 * @ngdoc function
 * @name raygunDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the raygunDemoApp
 */
angular.module('raygunDemoApp')
  .controller('MainCtrl', function ($scope, errorService, errorResource) {
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

      vm.sendWithTags = function () {
          errorService.sendWithCustomData();
      }

      vm.sendWithCustomData = function () {
          errorService.sendWithCustomData();
      }

      vm.remoteUnhandledException = function () {
          errorResource.throwUnhandledException().query();
      }
      
      vm.remoteCatchAndSendToRaygun = function () {
          errorResource.catchAndSendToRaygun().query();
      }
      
      vm.remoteSendWithUserInformation = function () {
          errorResource.sendWithUserInformation().query();
      }
      
      vm.remoteSendWithTags = function () {
          errorResource.sendWithTags().query();
      }
      
      vm.remoteSendWithCustomData = function () {
          errorResource.sendWithCustomData().query();
      }

  });
