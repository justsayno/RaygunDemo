(function () {
    'use strict';
    angular
        .module('common.services')
        .factory('errorService',
                ['$resource',
                   function errorService() {

                       this.throwUnhandledException = function () {
                           var object = {};
                           object.handledGlobally();
                       };

                       this.catchAndSendWithRaygun = function () {
                           try{
                               var object = {};
                               object.handledLocallyWithTryCatch();
                           } catch (e) {
                               Raygun.send(e);
                           }
                       };

                       return this;
                   }]);
}());