app.controller('readyCtrl', function($scope,$timeout,$location,settingsService){

var playList = settingsService.loadPlaylist();

$scope.firstUp = playList.list[0].name;

var startWorkout = function(){
	$location.path('/exercise').replace();
};

var playBeep = function(){
	$('#beepTwo')[0].play();
};

var start = $timeout(startWorkout, 5000);
var play =  $timeout(playBeep, 5000);

});
