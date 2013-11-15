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

app.service('settingsService', ["$resource", function ($resource) {
   
	var playList = {};
	var Exercise = $resource('/api/exercise/next');
 
	return {
		load: function() {
			return playList;
		},
		save: function(obj) {
			playList = Exercise.get(obj);
		}
	};
}]);