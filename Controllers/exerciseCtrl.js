app.controller('exerciseCtrl', function($scope,$timeout,$location,$resource,settingsService){

	
    var playList = settingsService.loadPlaylist();
    $scope.currentIndex = 0;
    $scope.currentExercise = playList.list[$scope.currentIndex];
    

    for(var i=0; i<playList.list.length; i++){

        $scope.timeLeft = 8;
        $scope.onTimeout = function(){
            
            $scope.timeLeft--;
            mytimeout = $timeout($scope.onTimeout,1000).then(function(){
                if($scope.timeLeft<0){
                    $('#beep')[0].play();
                    $scope.currentIndex++;
                    $scope.currentExercise = playList.list[$scope.currentIndex];
                    $scope.timeLeft=8;
                    // $location.path('/rest').replace();
                }    
            });
           
        };
        var mytimeout = $timeout($scope.onTimeout,1000);

    }
	

   

});