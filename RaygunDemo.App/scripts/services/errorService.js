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
                               object.catchAndSendWithRaygun();
                           }
                           catch (e) {
                               Raygun.send(e);
                           }
                       };

                       this.sendWithUserInfo = function () {
                           Raygun.setUser('contact@sethreid.co.nz');
                           var result = 1 * countOfErrors;
                       }
                       
                       this.sendWithCustomData = function () {
                           Raygun.setUser('anonomous', true);
                           //setUser: function (user, isAnonymous, email, fullName, firstName, uuid)
                           var object = {};
                           
                           try {
                               var object = {};
                               object.sendWithCustomData();
                           }
                           catch (e) {
                               var customData = {
                                   areYouAnIdiot: true,
                                   shouldYouBeFiredForThisBug: false,
                                   comment : "This is pretty cool"
                               }
                               Raygun.send(e, customData);
                           }
                       }

                       return this;
                   }]);
}());