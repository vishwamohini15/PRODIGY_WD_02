let timerel=document.querySelector(".timer")
let startbtn=document.querySelector(".start")
let pausedbtn=document.querySelector(".paused")
let resetbtn=document.querySelector(".reset")

let startTime=0;
let elapsedTime=0;
let timerInterval;

function starttimer(){
    startTime=Date.now()-elapsedTime;

    timerInterval=setInterval(()=>{
    elapsedTime=Date.now()-startTime;
    timerel.textContent=formateTime(elapsedTime);

    },10)
    startbtn.diaabled=true;
    pausedbtn.diaabled=false
}

function formateTime(elapsedTime){
let milisecond=Math.floor((elapsedTime % 1000)/10);
let second=Math.floor((elapsedTime % (1000 * 60))/1000);

let minutes=Math.floor((elapsedTime % (1000 * 60*60))/(1000 * 60));
let hours=Math.floor(elapsedTime / (1000 * 60*60));



return(
    (hours?(hours>9?hours:"0"+hours):"00")+ ":"+

    (minutes?(minutes>9?minutes:"0"+minutes):"00")+ ":"+

    (second?(second>9?second:"0"+second):"00")+ "."+

(milisecond> 9 ? milisecond:"0" + milisecond)
);
}

function pausedtimer(){
    clearInterval(timerInterval)
    startbtn.diaabled=false;
    pausedbtn.diaabled=true;
}
function resetimer(){
    elapsedTime="0"
    timerel.textContent="00:00:00"
    startbtn.diaabled=false;
    pausedbtn.diaabled=true;
}
startbtn.addEventListener("click",starttimer)
pausedbtn.addEventListener("click",pausedtimer)
resetbtn.addEventListener("click",resetimer)
