let showSeatCount=document.getElementById('seat_count');
let showMoviePrice=document.getElementById('seat_price');
let movieSelector=document.getElementById('movie_selector');
let ticketContainer=document.querySelector('.ticket_container');     
const totalSeats=document.querySelectorAll('.ticket_container .seat');
const reset=document.getElementById('reset');


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
    console.log(a);
})

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
        console.log(selectedSeats.length);
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
