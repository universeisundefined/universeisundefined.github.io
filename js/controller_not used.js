var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.books = data;
  });
}]);