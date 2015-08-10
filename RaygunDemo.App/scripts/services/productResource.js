(function () {
    'use strict';

    angular
        .module('common.services')
        .factory('productResource',
                ['$resource',
                 'appSettings',
                    function productResource($resource, appSettings) {
                        return $resource(appSettings.serverPath + '/api/products/:search');
                    }]);
}());