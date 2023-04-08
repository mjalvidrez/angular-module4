// Create menudata.service.js file and create a service called 
// MenuDataService in it. This service should be declared on the data 
// module, not on the MenuApp module. The MenuDataService should have 2 
// methods:

(function () {
    angular.model('data')
    .service('MenuDataService', MenuDataService);

    // getAllCategories - this method should return a promise which is a 
    // result of using the $http service, using the following REST API 
    // endpoint: https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)getItemsForCategory(categoryShortName) 
    // - this method should return a promise which is a result of using the 
    // $http service, using the following REST API endpoint: 
    // https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json, 
    // where, before the call to the server, your code should append whatever 
    // categoryShortName value was passed in as an argument into the getItemsForCategory method.

    MenuDataService.$inject = ['$http'];
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method : "GET",
                url : ('https://coursera-jhu-default-rtdb.firebaseio.com/categories.json)')
            })
            .then(function (result) {
                return result.data;
            });
        }


        service.getItemsForCategories = function (categoryShortName) {
            return $http({
                method : "GET",
                url : ('https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json'),
                params : {
                    category : categoryShortName
                }
            })
            .then(function (result) {
                return result.data
            });
        }
    }

})