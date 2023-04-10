(function () {
    angular.module('MenuApp')
    .controller('categoriesController', CategoriesController);

    CategoriesController.$inject = ['items'];
    function CategoriesController(items) { 
        var cat = this;
        cat.items = items.data;
    }
})();