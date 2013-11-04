var app = angular.module('NotLegitsu', []);

function legitsuRouteConfig($routeProvider){
	$routeProvider.
		when('/', {
			controller: 'customizeCtrl',
			templateUrl: 'Partials/customize.html'
		}).
		when('/exercise', {
			controller: 'exerciseCtrl',
			templateUrl: 'Partials/exercise.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}

app.config(legitsuRouteConfig);