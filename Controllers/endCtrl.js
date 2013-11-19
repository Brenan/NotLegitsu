app.controller('endCtrl', function($scope,$timeout,$location,$resource,settingsService){

var playList = settingsService.loadPlaylist();

$scope.numCompleted = playList.list.length/2;

$scope.go = function ( path ) {
			$location.path( path );
		}

});