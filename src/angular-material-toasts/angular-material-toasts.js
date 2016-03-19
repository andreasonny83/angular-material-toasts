(function() {
  'use strict';

  angular.module('ngMaterialToasts', [])
    .factory('materialToast', materialToast)
    .value('version', '0.0.4');

  // factory.$inject = ['dependencies'];

  /* @ngInject */
  function materialToast() {
    var count = false;

    var service = {
          show: createToast,
          count: count
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
        service.count = !true;
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

      if (service.count) {
        return killToast(true, bodyCopy, options);
      }

      body.textContent = options.bodyCopy;

      service.count = true;
      toast.classList.add('show');

      if (service.timeoutID) {
        window.clearTimeout(service.timeoutID);
      }

      if (! options.persist) {
        service.timeoutID = window.setTimeout(function () {
          killToast();
        }, options.timeOut);
      }
    }
  }

})();
