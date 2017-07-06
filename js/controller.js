var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('ListController', function MyController($scope,$http) {
	$http.get('JS/data.json').success(function(data){
		$scope.books = data;
		});
});