(function () {
    var app = angular.module('search', []);

    app.controller('SearchController', ['$http', function ($http) {
        var everything = this;
        everything.products = [];
        $http.get('../json/data.json').success(function(data){
            everything.collections = data;
        });
    }]); 

})();