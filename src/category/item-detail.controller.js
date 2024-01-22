(function () {
'use strict';

angular.module('category')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  itemDetail.name = item.name;
  itemDetail.item1 = item.item1;
  itemDetail.item2 = item.item2;
    itemDetail.item3 = item.item3;
}

})();
