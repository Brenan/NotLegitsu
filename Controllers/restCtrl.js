app.controller('restCtrl', function($scope,$timeout,$location){

	$scope.timeLeft = 3;

	$scope.onTimeout = function(){
        $scope.timeLeft--;
        if ($scope.timeLeft > 0) {
            mytimeout = $timeout($scope.onTimeout,1000);
        } else{
        	$('#beepTwo')[0].play();
        	$location.path('/exercise').replace();
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
	
});