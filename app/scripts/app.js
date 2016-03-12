'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialToastApp
 * @description
 * # angularMaterialToastApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialToastApp', [
    'ngRoute',
    'ngMaterialToast'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'modules/main/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
