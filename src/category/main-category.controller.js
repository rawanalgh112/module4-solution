(function () {
'use strict';

angular.module('category')
.controller('MaincategoryController', MaincategoryController);


MaincategoryController.$inject = ['items'];
function MaincategoryController(items) {
  var mainList = this;
  mainList.items = items;
}

})();
