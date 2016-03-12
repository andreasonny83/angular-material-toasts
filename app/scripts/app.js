'use strict';

/**
 * @ngdoc overview
 * @name angularMaterialToastsApp
 * @description
 * # angularMaterialToastsApp
 *
 * Main module of the application.
 */
angular
  .module('angularMaterialToastsApp', [
    'ngRoute',
    'ngMaterialToasts'
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
