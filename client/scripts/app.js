var app = angular.module('app', []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.item = {};
    $scope.items = [];

    var fetchCats = function() {
        return $http.get('/agenda').then(function(res){
            if(res.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.item = {};
            $scope.items = res.data;
            return res.data;
        })
    };

    $scope.add = function(item){
        return $http.post('/agenda', item).then(fetchCats);
    };

    $scope.hi = function(message) {
      return console.log(message);
    };

    $scope.delete = function(id){
        console.log('no way');
        return $http.delete('/agenda/' + id).then(fetchCats);
    };

    fetchCats();
}]);