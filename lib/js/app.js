(function () {
    var app = angular.module('search', []);

    app.controller('SearchController', ['$http', function ($http) {
        var everything = this;
        everything.collections;
        $http.jsonp('http://spikejones.tc.uvu.edu/retrieve/collections?callback=JSON_CALLBACK').success(function(response){
            console.log('data = ' + response);
            everything.collections = response;
        }).error(function(data, status, headers, config){
            alert('Status = ' + status + ' | Headers = ' + headers + ' | Data = ' + data);
        });
    }]); 

})();