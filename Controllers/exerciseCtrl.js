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
        if( $scope.currentIndex == playList.list.length-2){
            $location.path('/end').replace(); 
            return;         
            
        }
        
        if($scope.currentIndex%2 === 0){
            $('#beep')[0].play();
            var switchIt = $timeout(switchCards, restTime).then(advance);
            $scope.comingUp ="Up Next: " + playList.list[$scope.currentIndex+2].name;
            restTimer();

        } else{
            $('#beepTwo')[0].play();
            var switchIt = $timeout(switchCards, exerciseTime).then(advance);
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
        countDown = $timeout(timer,1000);
    }

    var restTimer = function(){
        if(restCount==0){
            restCount =restTime/1000;
            return;
        }
        $scope.count=restCount;
        restCount--;
        countDown = $timeout(restTimer,1000);
    }

    var switchCards = function(){
        $(".exerciseCard").hide("slide", { direction: "left" }, 100); 
        $(".exerciseCard").show("slide", { direction: "right" }, 300); 
    }

    $scope.next = function(){
        $timeout.cancel(timeToNextExercise);
        advance();
    }

    $scope.pause = function(){
        $timeout.pause();
    }
    
    $timeout(advance, exerciseTime);
    $timeout(switchCards, exerciseTime);
    timer();
    $('.exerciseCard').hide();
    $('.exerciseCard').show("slide", { direction: "right" }, 300); 
    




});