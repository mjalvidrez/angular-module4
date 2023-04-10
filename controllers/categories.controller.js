(function () {
    'use strict'
    angular.module('MenuApp')
    .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['categories'];
    function CategoriesController(categories) { 
        var catctrl = this;
        console.log(categories);
        catctrl.categories = categories.data;

    }
})();