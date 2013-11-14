var app = angular.module('NotLegitsu', ['ngRoute', 'ngResource']);

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

app.service('playlist', function () {
   
	var settings = {};
 
	return {
		load: function() {
			return settings;
		},
		save: function(obj) {
			settings = obj;
		}
	};
});