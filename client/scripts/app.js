var app = angular.module('app', []);

app.controller("MainController", ['$scope', '$http', function($scope, $http){
    $scope.item = {};
    $scope.items = [];

    var fetchAgenda = function() {
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
        return $http.post('/agenda', item).then(fetchAgenda);
    };

    $scope.delete = function(id){
        return $http.delete('/agenda/' + id).then(fetchAgenda);
    };


    fetchAgenda();


}]);


app.directive('focusThis', ['$timeout', function($timeout) {
    return {
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $timeout(function() {
                    element.parent().parent().find('input')[0].focus();
                });
            });
        }
    };
}]);