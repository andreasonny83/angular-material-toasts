(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name angularMaterialToastApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the angularMaterialToastApp
   */

  angular.module('angularMaterialToastApp')
    .controller('MainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'materialToast'];

  function MainCtrl(scope, materialToast) {
    var vm = this;

    activate();

    function activate() {
      vm.buttonLabel = 'Howdy ';
    }

    vm.btnClick = function(msg, persist) {
      materialToast.show(msg, {persist:persist});
    };
  }
}());
