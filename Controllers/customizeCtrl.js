app.controller('customizeCtrl', function($scope, $location, settingsService){
	
	$scope.settings = {

		exerciseTime : 15,
		easy : true,
		moderate : true,
		challenging : false,
		fullBody : true,
		core :false,
		lowerBody : false,
		upperBody : false,
		noEquipment : true,
		weights : true,
		yogaMat : false,
		exerciseBall : false,
		stretchBand : false
	};

	

	$scope.go = function ( path ) {
		settingsService.createPlaylist($scope.settings, function(){
			$location.path( path );
		});
  		
	};

});