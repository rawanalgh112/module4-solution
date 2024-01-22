(function () {
'use strict';

angular.module('category')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/category/templates/home.template.html'
  })

  // Premade list page
  .state('mainList', {
    url: '/main-list',
    templateUrl: 'src/category/templates/main-category.template.html',
    controller: 'MaincategoryController as mainList',
    resolve: {
      items: ['categoryService', function (categoryService) {
        return categoryService.getItems();
      }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/category/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'categoryService',
            function ($stateParams, categoryService) {
              return categoryService.getItems()
                .then(function (items) {
                  return items[$stateParams.itemId];
                });
            }]
    }
  });
}

})();
