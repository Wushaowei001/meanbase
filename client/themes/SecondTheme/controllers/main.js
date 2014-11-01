app.controller('mainCtrl', ['$scope', '$http', '$location', 'CRUD', 'resolveData', function($scope, $http, $location, CRUD, resolveData) {

	$scope.page = resolveData.data;
	CRUD.comment.findByUrl($location.url(), function(data) {
		$scope.comments = data;
	});
	$scope.templateUrl = function() {
		return 'themes/SecondTheme/templates/' + resolveData.data.template;
	}

}]);