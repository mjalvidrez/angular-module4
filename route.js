// this is where we are going to be doing the routes that connect the links 

// Create routes.js file and configure your routes and view states in it. These 
// routes should be defined in the MenuApp module.

// Hint: don't try to define the states all at once. Define one state, including 
// whatever it needs and make sure it works all the way to the point when you can
// see the results on the screen. Then, move on to the next view state. That does 
// mean that you will have to leave routes.js and define all the other artifacts 
// listed below and then come back to it, etc.

// Hint: The home state will not need a controller. Just a template.

// Hint: The categories state can have a controller as well as a resolve. 
// The resolve will use the MenuDataService to retrieve categories and inject 
// them into the controller. The controller can then expose the retrieved 
// categories object such that it can be simply passed into the categories 
// component.

// Hint: The items state can have the same type of setup as the categories 
// state.

(function () {
    'use strict'
    angular.module('MenuApp', ['ui.router']);
    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {

        // Redirect to home page if no other URL matches 
        $urlRouterProvider.otherwise('/');
        // $locationProvider.html5Mode(true);
        $stateProvider

        // Home page 
        .state('home', {
            url : '/',
            templateUrl : 'templates/home.template.html'
        })

        // category page 
        .state('categories', {
            url : '/categories', 
            templateUrl : 'templates/categories.template.html',
            controller : 'CategoriesController as catctrl',
            resolve : {
                categories : ['MenuDataService', (MenuDataService) => { 
                    return MenuDataService.getAllCategories();
                }]
            }
        })

        // item page
        .state('items', {
            url : '/items/{short_name}',
            templateUrl : 'templates/items.template.html', 
            controller : 'ItemController as itemctrl',
            resolve : {
                items : ['MenuDataService', '$stateParams', (MenuDataService, $stateParams) => {
                    return MenuDataService.getItemsForCategories($stateParams.short_name);
                }]
            }
        })
    }
})();