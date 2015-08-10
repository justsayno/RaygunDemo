(function () {
    'use strict';

    angular
        .module('raygunDemoApp')
        .factory('errorLogger',
                    function errorLogger($window, $log) {
                        // Return the public API.

                        // I report errors to the remote server.
                        function report(error) {
                            // In this case, we're going to be using New Relic's Browser API to
                            // report JavaScript errors that originate from within the AngularJS
                            // application try / catch blocks (which is why the global error
                            // handler doesn't see them). But, since New Relic is a per-server
                            // cost, we might not have it enabled in every environment. Let's
                            // check to see if the API exists before we try to use it.
                            if ($window.Raygun) {
                                try {
                                    $window.Raygun.send(error);
                                    // If logging errors is causing an error, just swallow those
                                    // errors; attempting to log these errors might lock the browser
                                    // in an infinite loop.
                                } catch (raygunError) {
                                    $log.error(raygunError);
                                }
                            } else {
                                $log.info('Raygun was not available to record error.');
                            }
                        }
                        return ({
                            report: report
                        });
                    });
}());