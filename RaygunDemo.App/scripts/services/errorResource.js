(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('errorResource',
                ['$resource',
                    'appSettings',
                    function errorResource($resource, appSettings) {

                        this.throwUnhandledException = function () {
                            return $resource(appSettings.serverPath + '/api/error/ThrowUnhandledError');
                        }
                        
                        this.catchAndSendToRaygun = function () {
                            return $resource(appSettings.serverPath + '/api/error/CatchAndSendToRaygun');
                        }
                        
                        this.sendWithUserInformation = function () {
                            return $resource(appSettings.serverPath + '/api/error/SendWithUserInformation');
                        }
                        
                        this.sendWithTags = function () {
                            return $resource(appSettings.serverPath + '/api/error/SendWithTags');
                        }
                        
                        this.sendWithCustomData = function () {
                            return $resource(appSettings.serverPath + '/api/error/SendWithCustomData');
                        }
                        
                        return this;
                        
                    }]);
}());