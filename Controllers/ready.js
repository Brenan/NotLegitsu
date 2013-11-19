app.controller('readyCtrl', function($scope,$timeout,$location,settingsService){

var playList = settingsService.loadPlaylist();

$scope.firstUp = playList.list[0].name;

var startWorkout = function(){
	$location.path('/exercise').replace();
};

var start = $timeout(startWorkout, 3000);


});
