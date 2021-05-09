const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');



//Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);


updatePlayIcon();

//play & pause video 
function toggleVideoStatus() {
    if (video.paused) {
        video.play();
    }

//update play/pause icon 
function updatePlayIcon () {
    if (video.paused) {
        play.innerHTML='<i class="fa fa-play fa-2x"></i>';
    } else {
        play.innerHTML='<i class="fa fa-pause fa-2x"></i>';
    }
}

