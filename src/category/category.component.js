(function () {
'use strict';

angular.module('category')
.component('category', {
  templateUrl: 'src/category/templates/category.template.html',
  bindings: {
    items: '<'
  }
});

})();
