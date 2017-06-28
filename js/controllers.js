

var app = angular.module('myApp', []);
var resultsLength = 0;
app.controller('myCtrl',['$scope','$interval','$http', function($scope,$interval,$http) {
    $scope.getServices = function(){
        $http({
             headers: { 
                    'cache-control': 'no-cache',
                     'App-Id':'5a3d8b8d',
                     'App-Key': '738e9aca62e7465446b7be8fe4219ffa' ,
                     'content-type': "application/json" 
                 },
            method:'GET',
            url:"https://uk.bookingbug.com/api/v1/41285/services?page=1&per_page=300"
            }).then(function(response) {
            $scope.allresults = response.data._embedded.services;
            resultsLength = $scope.allresults.length;
            $scope.results =  $scope.allresults;
            mocha.run();
        });
        
    }
    $scope.getServices();

}]);


app.filter("toArray", function(){
    return function(obj) {
        var result = [];
        angular.forEach(obj, function(val, key) {
            result.push(val);
        });
         return result.reverse();
    };
});

