app.controller('exerciseCtrl', function($scope,$timeout,$location,$resource,settingsService){

	
    var playList = settingsService.loadPlaylist();
    $scope.currentIndex = 0;
    $scope.currentExercise = playList.list[$scope.currentIndex];
    var exerciseTime = 10000;
    count = exerciseTime/1000;
    

    var advance = function(){
        if( $scope.currentIndex == playList.list.length -1){
            alert("You Are Legitsu.");          
            return;
        }
        $('#beep')[0].play();
        var timeToNextExercise = $timeout(advance, exerciseTime);
        timer();
        $scope.currentExercise = playList.list[++$scope.currentIndex];
        
    };

    var timer = function(){
        if(count==0){
            count =exerciseTime/1000;
            return;
        }
        $scope.count=count;
        count--;
        var countDown = $timeout(timer,1000);
    }
    
    $timeout(advance, exerciseTime);
    timer();




});