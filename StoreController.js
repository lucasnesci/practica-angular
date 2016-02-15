(function() {
  'use strict';

  var gems = [
    { name: 'Azurite', price: 2.95 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 },
  ];

  angular
    .module('gemStore', [])
    .controller('StoreController', StoreController);

    function StoreController($log) {
      this.products = gems;
      this.purchase = purchase;

      function purchase(product) {
        $log.warn('StoreController.purchase NOT_IMPLEMENTED - Product: ' + product.name);
      }
    };
})();
