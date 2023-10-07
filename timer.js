const timedisplay=document.getElementById("timedisplay")
const startbtn=document.getElementById("start")
const pausebtn=document.getElementById("pause")
const resetbtn=document.getElementById("reset")

let hours=0
let mins=0
let secs=0
let paused=true
let intervalid
let elapsetime=0
let starttime=0
let currenttime=0

startbtn.addEventListener("click",()=>{
    if(paused){
        paused=false
        starttime=Date.now()-elapsetime
        intervalid=setInterval(updatetime,1000)
    }
})
pausebtn.addEventListener("click",()=>{
    if(!paused){
        paused=true
        elapsetime=Date.now()-starttime
        clearInterval(intervalid)
    }
})
resetbtn.addEventListener("click",()=>{
    paused=true
    clearInterval(intervalid)
    starttime=0
    elapsetime=0
    currenttime=0
    hours=0
    mins=0
    secs=0
    timedisplay.textContent="00:00:00"
})

function updatetime(){
    elapsetime=Date.now()-starttime

    secs=Math.floor((elapsetime/1000)%60)
    mins=Math.floor((elapsetime/(1000*60))%60)
    hours=Math.floor((elapsetime/( 1000*60*60))%60)

    secs=pad(secs)
    mins=pad(mins)
    hours=pad(hours)

    timedisplay.textContent=`${hours}:${mins}:${secs}`
    function pad(unit){
        return (("0")+unit).length>2?unit:"0"+unit
    }
}

