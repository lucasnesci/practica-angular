(function() {
  'use strict';

  angular
    .module('gemStore')
    .controller('GalleryController', GalleryController);

    function GalleryController() {
      var vm = this;
      vm.current = 0;
      vm.setCurrent = setCurrent;

      function setCurrent(current) {
        vm.current = current || 0;
      }
    };
})();
