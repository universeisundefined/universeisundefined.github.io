var bookControllers = angular.module('bookControllers', []);

bookControllers.controller('ListController', function MyController($scope,$http) {
	$http.get('js/data.json').success(function(data){
		$scope.books = data;
		});
});