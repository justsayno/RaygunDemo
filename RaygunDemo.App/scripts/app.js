'use strict';

/**
 * @ngdoc overview
 * @name raygunDemoApp
 * @description
 * # raygunDemoApp
 *
 * Main module of the application.
 */
angular.module('raygunDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'common.services'])
.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
.config(function addReporting($provide) {
                // Provide an interceptor for the error workflow.
                $provide.decorator(
                    '$exceptionHandler',
                    function ($delegate, errorLogger) {
                        // Return the new $exceptionHandler implementation which will
                        // report the error to our internal error handler before passing
                        // it off to the original $exceptionHandler implementation (which
                        // may, itself, be some other delegate provided by another part
                        // of the application).
                        return function exceptionHandlerProxy(error, cause) {
                            errorLogger.report(error);
                            $delegate(error, cause);
                        };
                        
                    }
                );
            }
        );
