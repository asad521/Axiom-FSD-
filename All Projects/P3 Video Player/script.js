//getting required element
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const video = document.getElementById("video");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");
//video event
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', togglePlayIcon);
video.addEventListener('play', togglePlayIcon);
video.addEventListener('timeupdate', moveProgressBar);
//play button event
play.addEventListener('click', toggleVideoStatus);
//stop button event
stop.addEventListener('click',stopVideo);
//progress bar event
progress.addEventListener('change', setVideoProgress);




function toggleVideoStatus() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }

}

function stopVideo(){
    video.currentTime=0;
    // stop.setAttribute("class","border")
 
}

//we use video status for icon change rathing using click event of play and stop button
function togglePlayIcon() {

    if (video.paused) {
        play.innerHTML= '<i class="fa fa-pause fa-2x"></i>';
    } else if (video.play) {
        play.innerHTML= '<i class="fa fa-play fa-2x"></i>';
    }

}


function setVideoProgress() {
    time=(+progress.value *video.duration)/100;
    video.currentTime=+time;  //setting video as per progress bar

}

function moveProgressBar() {
    // console.log('set video  triggered');
    // get progress value in 0-100 
    //convert progress value to current time


    totalTime=+video.duration;
    ctime=+video.currentTime;
    progress.value=(ctime/totalTime)*100;

    // console.log(time);
    let mins=+video.currentTime /60;
    mins=Math.floor(mins); 
    if (mins < 10) {
        mins='0' + String(mins);
        // console.log(timestamp.innerHTML);
        // timestamp.innerHTML='0' + String(mins);
        // console.log(timestamp.innerHTML);
    } 
     // for seconds
    let secs=+video.currentTime % 60;
    secs=Math.floor(secs); 
    if (secs < 10) {
        secs='0' + String(secs);
     }
    // console.log(timestamp.innerHTML);

     timestamp.innerHTML=`${mins}:${secs}` ;
 }
