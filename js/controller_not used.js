var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('JS/data.json').success(function(data) {
    $scope.books = data;
  });
}]);