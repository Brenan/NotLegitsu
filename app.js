var app = angular.module('NotLegitsu', ['ngRoute']);

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
		when('/rest', {
			controller: 'restCtrl',
			templateUrl: 'Partials/rest.html'
		}).
		otherwise({
			redirectTo: '/'
		});
}

app.config(legitsuRouteConfig);