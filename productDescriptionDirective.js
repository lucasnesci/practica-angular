(function() {
  'use strict';

  angular
    .module('gemStore')
    .directive('productDescription', productDescription);

  function productDescription() {
    var directive = {
      templateUrl: 'product-description.html',
      restrict: 'E'
    }

    return directive;
  }
})();
