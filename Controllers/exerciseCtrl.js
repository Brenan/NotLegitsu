app.controller('exerciseCtrl', function($scope,$timeout,$location,$resource){

	$scope.timeLeft = 8;
 

	$scope.onTimeout = function(){
        $scope.timeLeft--;
        if ($scope.timeLeft > 0) {
            mytimeout = $timeout($scope.onTimeout,1000);
        } else{
            $('#beep')[0].play();
        	$location.path('/rest').replace();
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);

    var Exercise = $resource('/api/exercise/next');

    $scope.currentExercise = Exercise.get();
	
});