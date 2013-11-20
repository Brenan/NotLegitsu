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

	var settingsObj = {
		exerciseTime: $scope.settings.exerciseTime,
		difficulty: [],
		bodyFocus: [],
		equipment:[]
	};


	var setSettingsObj = function(){
		if ($scope.settings.easy){
			settingsObj.difficulty.push(1);
		}
		if ($scope.settings.moderate){
			settingsObj.difficulty.push(2);
		}
		if ($scope.settings.challenging){
			settingsObj.difficulty.push(3);
		}
		if ($scope.settings.fullBody){
			settingsObj.bodyFocus.push("fullBody");
		}
		if ($scope.settings.core){
			settingsObj.bodyFocus.push("core");
		}
		if ($scope.settings.lowerBody){
			settingsObj.bodyFocus.push("lowerBody");
		}
		if ($scope.settings.upperBody){
			settingsObj.bodyFocus.push("upperBody");
		}
		if ($scope.settings.noEquipment){
			settingsObj.equipment.push("None");
		}
		if ($scope.settings.weights){
			settingsObj.equipment.push("Weights");
		}
		if ($scope.settings.yogaMat){
			settingsObj.equipment.push("YogaMat");
		}
		if ($scope.settings.exerciseBall){
			settingsObj.equipment.push("exerciseBall");
		}
		if ($scope.settings.stretchBand){
			settingsObj.equipment.push("stretchBand");
		}
	};
	
	$scope.go = function ( path ) {
		setSettingsObj();
		console.log("Exercise time "+setSettingsObj.exerciseTime);
		settingsService.createPlaylist(settingsObj, function(){
			
			$location.path( path );

		});
  		
	};

});