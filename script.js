let timerState = 300

let flag = 0

function minutes(argument){
    let minutes = Math.floor(timerState / 60)
    return minutes
}

function seconds(argument){
    let seconds = timerState % 60
    return seconds
}

// ---------------------------------------------------------------------------------
function beginCountdown(){

    if (flag == 0){
        refreshIntervalId = setInterval(() => {
            flag = 1
            timerState--
            let min = minutes(timerState)
            let sec = seconds(timerState)
            
            if (sec < 10){
                document.getElementById("timer").textContent = `0${min}:0${sec}`    
            }else{
                document.getElementById("timer").textContent = `0${min}:${sec}`
            }
            if ( min == 0 && sec == 0){
                flag = 0
                clearInterval(refreshIntervalId)
            }
        }, 1000)
    }
}

// ----------------------------------------------------------------------------------

function pauseCountdown(){
    clearInterval(refreshIntervalId)
    flag = 0
}

// ----------------------------------------------------------------------------------

function resetCountdown(){
    
    clearInterval(refreshIntervalId)
    flag = 0
    timerState = 300
    document.getElementById("timer").textContent = "05:00"

}
// ----------------------------------------------------------------------------------
let homeState = 0
let guestState = 0

function addScore(team , points){
    if ( team == "home"){
        homeState += points
        document.getElementById("home-score").textContent = homeState
    }
    
    if ( team == "guest"){
        guestState += points
        document.getElementById("guest-score").textContent = guestState
    }
}
// --------------------------------------------------------------------------------
function newGame(){
    homeState = 0
    guestState = 0
    document.getElementById("home-score").textContent = "0"
    document.getElementById("guest-score").textContent = "0"
    resetCountdown()
}