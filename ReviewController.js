(function() {
  'use strict';

  angular
    .module('gemStore')
    .controller('ReviewController', ReviewController);

    function ReviewController() {
      var vm = this;
      vm.addReview = addReview;
      reset();

      function reset() {
        vm.review = {};
      }

      function addReview(product) {
        product.reviews.push(vm.review);
        reset();
        return true;
      }
    };
})();
