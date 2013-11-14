app.controller('customizeCtrl', function($scope, $location){
	$scope.settings.exerciseTime = 15;
	$scope.settings.easy = false;
	$scope.settings.moderate = true;
	$scope.settings.challenging = false;
	$scope.settings.fullBody = true;
	$scope.settings.core = false;
	$scope.settings.lowerBody = false;
	$scope.settings.upperBody = false;
	$scope.settings.noEquipment = true;
	$scope.settings.weights = true;
	$scope.settings.yogaMat = false;
	$scope.settings.exerciseBall = false;
	$scope.settings.stretchBand = false;

	$scope.go = function ( path ) {
  		$location.path( path );
	};

});