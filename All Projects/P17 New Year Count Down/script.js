const daysEl =document.getElementById('days');
const hoursEl =document.getElementById('hours');
const minutesEl =document.getElementById('minutes');
const secondsEl =document.getElementById('seconds');
const countdownEl =document.getElementById('countdown');
const year=document.getElementById('year')
const loader=document.getElementById('loader');

//

// const currentYear= new Date().getFullYear(); //dynamic way of getting year
// console.log(currentYear)
// const newYearTime= new Date(`January 01 ${currentYear +1} 00:00:00`);//hardccoded date
// console.log(newYearTime)
const currentYear = new Date().getFullYear();
year.innerHTML=currentYear+1;

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown(){
    const currentTime=new Date();
    const diff=newYearTime - currentTime;
    console.log(diff)//is milisec to 2022
    const seconds= Math.floor(diff/1000)%60;
    console.log("Number of Seconds remaining=>"+seconds)
    const minutes= Math.floor(diff/1000/60)%60;
    console.log("Number of minutes remaining =>"+ minutes)
    const hours= Math.floor(diff/1000/60/60)%24;
    console.log("Numbers of hours remaining =>"+hours)
    const days= Math.floor(diff/1000/60/60/24);
    console.log("Numbers of days remaining =>"+days)
    // display on Screen
    displayResult(seconds,minutes,hours,days);
}

setInterval(updateCountdown,1000);

function displayResult(seconds,minutes,hours,days){
    daysEl.innerHTML=days;
    hoursEl.innerHTML=hours < 10 ? '0'+hours : hours; //if hours less than 10 show 0hours
    minutesEl.innerHTML= minutes < 10 ? '0'+ minutes :  minutes;;
    secondsEl.innerHTML= seconds < 10 ? '0'+ seconds :  seconds;;

}
//set time out will execute the funtion inside it after some time
setTimeout( ()=>{
    console.log('hellow world')
    loader.remove(); // after 2s, remove loader and show countdown
    countdownEl.style.display='flex';

},2000)