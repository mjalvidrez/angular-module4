// Create data.module.js file and declare another module in it called data. 
// Make sure the MenuApp module lists the data module as a dependency.

(function () {
    'use strict'
    angular.controller('MenuApp', ['data']);
})();