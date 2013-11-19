var app = angular.module('NotLegitsu', ['ngRoute', 'ngResource', 'ngAnimate', 'timer']);

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
		when('/end', {
			controller: 'endCtrl',
			templateUrl: 'Partials/end.html'
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
		loadPlaylist: function() {
			return playList;
		},
		createPlaylist: function(obj, callback) {
			playList = Exercise.get(obj, function(){
				callback();
			});
		}
	};
}]);