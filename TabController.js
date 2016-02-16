(function() {
  'use strict';

  angular
    .module('gemStore')
    .controller('TabController', TabController);

    function TabController() {
      var vm = this;
      vm.tab = 1;
      vm.setTab = setTab;
      vm.isSet = isSet;

      function setTab(tab) {
        vm.tab = tab;
      }

      function isSet(tab) {
        return vm.tab === tab;
      }
    };
})();
