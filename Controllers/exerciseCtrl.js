app.controller('exerciseCtrl', function($scope,$timeout,$location,$resource,settingsService){

	
    var playList = settingsService.loadPlaylist();
    $scope.currentIndex = 0;
    $scope.currentExercise = playList.list[$scope.currentIndex];
    var exerciseTime = 10000;
    var restTime = 5000;
    count = exerciseTime/1000;
    restCount = restTime/1000;
    $scope.comingUp = null;
    

    var advance = function(){
        if( $scope.currentIndex == playList.list.length-1){
            alert("You Are Legitsu.");          
            return;
        }
        
        if($scope.currentIndex%2 === 0){
            $('#beep')[0].play();
            var timeToNextExercise = $timeout(advance, restTime);
            $scope.comingUp ="Up Next: " + playList.list[$scope.currentIndex+2].name;
            restTimer();

        } else{
            $('#beepTwo')[0].play();
            var timeToNextExercise = $timeout(advance, exerciseTime);
            $scope.comingUp=null;
            timer();
        }

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

    var restTimer = function(){
        if(restCount==0){
            restCount =restTime/1000;
            return;
        }
        $scope.count=restCount;
        restCount--;
        var countDown = $timeout(restTimer,1000);
    }
    
    $timeout(advance, exerciseTime);
    timer();




});