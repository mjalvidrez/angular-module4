// need to make a commponent called 
// categories to show all categories in the menu to the user
// Create categories.component.js file and create component called 
// categories that shows all available categories in the menu to the user.

(function (){
    'use strict'
    angular.module('MenuApp')
    .component('category', {
        templateUrl : 'categories.template.html',
        bindings : {
            categories : "<"
        }
    });
})();