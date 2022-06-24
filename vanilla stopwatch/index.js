var seconds = 00;
var tens = 00;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval;


function startTimer(){
    tens++;
    if(tens<9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens>9){
        appendTens.innerHTML = tens;
    }

    if(tens>99){
        seconds++;
        appendTens.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 0) {
        appendSeconds.innerHTML = seconds;
    }

}

buttonStart.onclick = function(){
    interval = setInterval(startTimer);

}

buttonStop.onclick = function(){
    clearInterval(interval);
    console.log(seconds,tens)
    alert("ai terminat alergarea")
}

buttonReset.onclick = function(){
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
}











