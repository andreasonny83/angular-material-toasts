(function() {
  'use strict';

  angular
    .module('ngMaterialToast', [])
    .factory('materialToast', materialToast);

  // factory.$inject = ['dependencies'];

  /* @ngInject */
  function materialToast() {
    var vm = this;

    vm.count = false;

    var service = {
          show: show
        };

    init();

    return service;

    function init() {
      var toast = document.createElement('div'),
          body = document.createElement('span'),
          toastId = 'material-toast';

      toast.className = 'ng-material-toast';
      toast.id = toastId;

      toast.appendChild(body);
      document.getElementsByTagName('body')[0].appendChild(toast);
    }

    function killToast(reCreate, bodyCopy, options) {
      var toast, classes;

      toast = document.getElementById('material-toast');
      classes = toast.getAttribute('class');

      // if another toast is already visible, kill it!
      if (classes.indexOf('show') !== -1) {
        toast.classList.remove('show');
        vm.count = !true;
      }

      if (reCreate === true) {
        window.setTimeout(function () {
          createToast(bodyCopy, options);
        }, 500);
      }
    }

    function createToast(bodyCopy, _options) {
      var toast = document.getElementById('material-toast'),
          body = toast.getElementsByTagName('span')[0];

      _options = _options || {};

      var options = {
        bodyCopy: bodyCopy || '',
        persist: _options.persist || false,
        timeOut: _options.timeOut || 4000
      };

      if (vm.count) {
        return killToast(true, bodyCopy, options);
      }

      body.textContent = options.bodyCopy;

      vm.count = true;
      toast.classList.add('show');

      if (vm.timeoutID) {
        window.clearTimeout(vm.timeoutID);
      }

      if (! options.persist) {
        vm.timeoutID = window.setTimeout(function () {
          killToast();
        }, options.timeOut);
      }
    }

    function show(bodyCopy, options) {
      createToast(bodyCopy, options);
    }
  }

})();
