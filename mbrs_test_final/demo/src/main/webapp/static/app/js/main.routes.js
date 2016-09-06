var demoApp = angular.module('demoApp.routes', ['ngRoute']);

demoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : '/static/app/html/partial/home.html'
        })
                .when('/countryList', {
            templateUrl : '/static/app/html/partial/countryList.html',
            controller : 'CountryController'
        })
        .when('/countryList/add', {
            templateUrl : '/static/app/html/partial/addEditCountry.html',
            controller : 'CountryController'
        })
        .when('/countryList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditCountry.html',
            controller : 'CountryController'
        })
        .when('/countryList/:id', {
            templateUrl : '/static/app/html/partial/viewCountry.html',
            controller : 'CountryController'
        })
        .when('/cityList', {
            templateUrl : '/static/app/html/partial/cityList.html',
            controller : 'CityController'
        })
        .when('/cityList/add', {
            templateUrl : '/static/app/html/partial/addEditCity.html',
            controller : 'CityController'
        })
        .when('/cityList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditCity.html',
            controller : 'CityController'
        })
        .when('/cityList/:id', {
            templateUrl : '/static/app/html/partial/viewCity.html',
            controller : 'CityController'
        })
        .when('/restaurantBrandList', {
            templateUrl : '/static/app/html/partial/restaurantBrandList.html',
            controller : 'RestaurantBrandController'
        })
        .when('/restaurantBrandList/add', {
            templateUrl : '/static/app/html/partial/addEditRestaurantBrand.html',
            controller : 'RestaurantBrandController'
        })
        .when('/restaurantBrandList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditRestaurantBrand.html',
            controller : 'RestaurantBrandController'
        })
        .when('/restaurantBrandList/:id', {
            templateUrl : '/static/app/html/partial/viewRestaurantBrand.html',
            controller : 'RestaurantBrandController'
        })
        .when('/restaurantList', {
            templateUrl : '/static/app/html/partial/restaurantList.html',
            controller : 'RestaurantController'
        })
        .when('/restaurantList/add', {
            templateUrl : '/static/app/html/partial/addEditRestaurant.html',
            controller : 'RestaurantController'
        })
        .when('/restaurantList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditRestaurant.html',
            controller : 'RestaurantController'
        })
        .when('/restaurantList/:id', {
            templateUrl : '/static/app/html/partial/viewRestaurant.html',
            controller : 'RestaurantController'
        })
        .when('/sellerList', {
            templateUrl : '/static/app/html/partial/sellerList.html',
            controller : 'SellerController'
        })
        .when('/sellerList/add', {
            templateUrl : '/static/app/html/partial/addEditSeller.html',
            controller : 'SellerController'
        })
        .when('/sellerList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditSeller.html',
            controller : 'SellerController'
        })
        .when('/sellerList/:id', {
            templateUrl : '/static/app/html/partial/viewSeller.html',
            controller : 'SellerController'
        })
        .when('/adminList', {
            templateUrl : '/static/app/html/partial/adminList.html',
            controller : 'AdminController'
        })
        .when('/adminList/add', {
            templateUrl : '/static/app/html/partial/addEditAdmin.html',
            controller : 'AdminController'
        })
        .when('/adminList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditAdmin.html',
            controller : 'AdminController'
        })
        .when('/adminList/:id', {
            templateUrl : '/static/app/html/partial/viewAdmin.html',
            controller : 'AdminController'
        })
        .when('/menuItemCategoryList', {
            templateUrl : '/static/app/html/partial/menuItemCategoryList.html',
            controller : 'MenuItemCategoryController'
        })
        .when('/menuItemCategoryList/add', {
            templateUrl : '/static/app/html/partial/addEditMenuItemCategory.html',
            controller : 'MenuItemCategoryController'
        })
        .when('/menuItemCategoryList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditMenuItemCategory.html',
            controller : 'MenuItemCategoryController'
        })
        .when('/menuItemCategoryList/:id', {
            templateUrl : '/static/app/html/partial/viewMenuItemCategory.html',
            controller : 'MenuItemCategoryController'
        })
        .when('/menuItemList', {
            templateUrl : '/static/app/html/partial/menuItemList.html',
            controller : 'MenuItemController'
        })
        .when('/menuItemList/add', {
            templateUrl : '/static/app/html/partial/addEditMenuItem.html',
            controller : 'MenuItemController'
        })
        .when('/menuItemList/edit/:id', {
            templateUrl : '/static/app/html/partial/addEditMenuItem.html',
            controller : 'MenuItemController'
        })
        .when('/menuItemList/:id', {
            templateUrl : '/static/app/html/partial/viewMenuItem.html',
            controller : 'MenuItemController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
