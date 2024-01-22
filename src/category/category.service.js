(function () {
'use strict';

angular.module('category')
.service('categoryService', categoryService);


categoryService.$inject = ['$q', '$timeout']
function categoryService($q, $timeout) {
  var service = this;

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Burgers",
item1:"Beef burger",
item2: "Chicken burger",
item3 : "Fish burger"
  });
  items.push({
    name: "Pizzas",
    item1:"Beef",
    item2: "Margereta pizza",
    item3 : "Veg pizza"

  });
  items.push({
    name: "Pastas",
    item1:"Salmon pasta",
    item2: "Lopster pizza",
    item3 : "Alfredo pizza"  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
