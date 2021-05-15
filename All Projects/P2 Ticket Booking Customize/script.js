var trailers = ["Saab", "Volvo", "BMW", "https://www.youtube.com/watch?v=-BQPKD7eozY"];

let showSeatCount=document.getElementById('seat_count');
let showMoviePrice=document.getElementById('seat_price');
let movieSelector=document.getElementById('movie_selector');
let ticketContainer=document.querySelector('.ticket_container');     
const totalSeats=document.querySelectorAll('.ticket_container .seat');
const reset=document.getElementById('reset');


//

// const youtube=document.querySelectorAll('fa-youtube');;quese error is not a function w/o [o]
// cancel of youtube window and addion//
const ticket=document.getElementById("ticket");
const videoPlayer=document.getElementById("videoPlayer");

// let  c=document.querySelectorAll('.fa.fa-youtube');
let  book=document.querySelectorAll('.fa.fa-youtube'); //
let  youtube=document.querySelectorAll('.fa.fa-calendar-alt');
let close=document.getElementById("close");  //for closing youtube window
let cancel=document.getElementById("cancel"); //for closing cinema window



// console.log(typeof d);
// console.log(d);
youtube.forEach(open_youtube);
//for youtube
function open_youtube(item,index) {
    item.addEventListener('click', function(e){
    ticket.classList.add("show");
    backname=(youtube[index].parentElement.parentElement);
    a=backname.querySelector("h2");
    console.log(a.innerText);
    console.log(movieSelector.selectedIndex=index);
    show_price();

    })
}   
cancel.addEventListener('click',function(e){
    ticket.classList.remove("show");
})
//for book
book.forEach(open_book);

//for youtube
function open_book(item,index) {
    item.addEventListener('click', function(e){
        videoPlayer.classList.add("show");
        // video.setAttribute("src",cars[3]);
    })
}   
close.addEventListener('click',function(e){
    videoPlayer.classList.remove("show");
    console.log("asdfasdfasd");
    video.currentTime=0;
    video.pause();


})



// cancel of youtube window and addion//


//video player tags script//
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

//video player tags script//



////

// let movie=document.getElementById('movie');

// const seats=document.querySelectorAll('.ticket_container .seat:not(.reserved)');
PopulateUI();

ticketContainer.addEventListener('click',function(e){
// seats selections
    if(e.target.classList.contains('seat')&&
       !e.target.classList.contains('reserved')) {
           e.target.classList.toggle('selected');
           show_price();
           storeDataLocal();
       }
})

movieSelector.addEventListener('change',function(e){
    show_price();
    storeDataLocal();
})
// reset.addEventListener('onclick'function(e){
//     document.getElementById("reset").style.color = "blue";

// })
reset.addEventListener('click', function(e){
    console.log("asdf");
    const SelectedSeatsIndex = JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    console.log(SelectedSeatsIndex);
    if(SelectedSeatsIndex !== null && SelectedSeatsIndex.length > 0) {
        totalSeats.forEach((seat, index) => {
            if(SelectedSeatsIndex.indexOf(index) > -1) {
                seat.classList.remove('selected')
                storeDataLocal();
                show_price();
                movieSelector.selectedIndex=null;



            }
        })
    };

})


function show_price() {
    console.log('asdfsdfasdf');
    //fetch no of selected seats. fetch movie price . multiply both
    selectedSeats=document.querySelectorAll('.ticket_container  .selected');
    count=selectedSeats.length;
    moviePrice=+movieSelector.value;
    showMoviePrice.innerHTML=count*moviePrice;
    showSeatCount.innerHTML=count;
}

function storeDataLocal() {
    if(movieSelector.value !== '') {
        //fetch no of selected seats and saving their index to local
        selectedSeats=document.querySelectorAll('.ticket_container  .selected');
        // console.log(selectedSeats.length);
        const SelectedSeatsIndex = [...selectedSeats].map(seat => [...totalSeats].indexOf(seat));
        localStorage.setItem('SelectedSeatsIndex', JSON.stringify(SelectedSeatsIndex))
        //fetching movieselector value and index and stroing to local
        moviePrice=movieSelector.value;
        movieIndex=movieSelector.selectedIndex;
        localStorage.setItem('moviePrice', moviePrice);
        localStorage.setItem('movieIndex', movieIndex);
    }
}

function PopulateUI() {

    const SelectedSeatsIndex = JSON.parse(localStorage.getItem('SelectedSeatsIndex'));
    // if (SelectedSeatsIndex.length
    if(SelectedSeatsIndex !== null && SelectedSeatsIndex.length > 0) {
        totalSeats.forEach((seat, index) => {
            if(SelectedSeatsIndex.indexOf(index) > -1) {
                seat.classList.add('selected')
            }
        })
    };

    moviePrice=localStorage.getItem('moviePrice');
    movieIndex=localStorage.getItem('movieIndex');
    movieSelector.selectedIndex=movieIndex;
    show_price();
}
