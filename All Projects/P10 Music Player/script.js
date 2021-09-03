const container= document.getElementById('container');
const previous = document.getElementById('previous');
const play = document.getElementById('play');
const next = document.getElementById('next');
//song info getting
const album=document.getElementById('album');
const song_title=document.getElementById('song_title');
const progress=document.getElementById('progress');
const progressBar=document.getElementById('progressBar');
let   audioTrack=document.getElementById('audio');

// Songs Array
const tracks= ['Track-1','Track-2','Track-3','Track-4',]

//Events//////a
// event trigger on every update of audio file
audioTrack.addEventListener('timeupdate',updateProgress );
//trigger to detect end of song
audioTrack.addEventListener('ended',nextTrack)
//for previous song
previous.addEventListener('click', prevTrack);
// for setting progress
progress.addEventListener("click",setProgress);
//for next songs
next.addEventListener('click', nextTrack);
// Index of current congs

let trackIndex=0;
loadTrack(trackIndex);
// for loading the song
function loadTrack(Index) {
    // update the text for tackt
    // console.log("This is track for laoding==>" +track)
    song_title.innerHTML=tracks[Index];

     //update the audio file
     audioTrack.src=`music/${tracks[Index]}.mp3`
   
     //update the album file
     album.src=`images/${tracks[Index]}.jpg`

}

//eevent listner for play
play.addEventListener('click',() => {
    //first check if song is play or not
    const isPlaying=container.classList.contains('play')
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }

})

function playTrack() { 
    //  play the song
    container.classList.add('play');
    //change icon and color when play
    play.innerHTML=`<i class="fa fa-pause"></i>`;
    play.style.backgroundColor='transparent';
    play.style.color=`black`



    //Play the track

    audioTrack.play();
}
// to stop song

function pauseTrack () {
    // console.log("in pluse")
    //  stop the song
    container.classList.remove('play');
    
    //change icon and color when stop
    play.innerHTML=`<i class="fa fa-play"></i>`;
    play.style.backgroundColor='black';
    play.style.color=`white`;


    //stop the track
    audioTrack.pause();

}



function prevTrack() {
    // if the songs is first in array
    console.log(trackIndex)

    if(trackIndex === 0){
        console.log("in previousTrack")
        console.log(trackIndex)
        trackIndex=tracks.length-1;
        loadTrack(trackIndex);
        playTrack();

    } else {
        trackIndex--;
        loadTrack(trackIndex);
        playTrack();

    }
}
//for next tracktion function
function nextTrack() {
    console.log("in nextTrack")
    console.log(trackIndex)
    // if the songs in last in array
    if(trackIndex ===tracks.length-1){
        trackIndex=0;
        loadTrack(trackIndex);
        playTrack();
        // console.log(songs.length);
    } else {
        trackIndex++;
        loadTrack(trackIndex);
        playTrack();
    }
}

function updateProgress(e) {
     
    // console.log(e.srcElement.currentTime)
    // destruction the e.srcElement
    // &getting the duration and currentTime from both
    const {duration,currentTime} =e.srcElement
    // console.log(currentTime);
    // console.log(duration);
    //calculate percentage of over audio played urings current time and total
    const processPer= currentTime/duration * 100;
    // console.log("percentage is => " +processPer )
    // progress update
    progressBar.style.width=`${processPer}%`

}


function setProgress(e ) {
    const width =this.clientWidth;
    console.log(width);
    console.log(e.offsetX);
    e.offsetX;
    const duration=audio.duration;
    audio.currentTime=e.offsetX/width *duration;

}



