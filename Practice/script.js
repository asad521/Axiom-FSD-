const seat_count=document.getElementById('seat_count');
const movie_price=document.getElementById('price');
const movie=document.getElementById('movie');
const movie_selector=document.getElementById('movie_selector');
const ticket_container=document.querySelector('.ticket_container');     
// const seats=document.querySelectorAll('.ticket_container .seat:not(.reserved)');
const seats=document.querySelectorAll('.ticket_container .seat');
let  value=+movie.value;

populateUI() ;

// event for action drop down menu 
movie_selector.addEventListener('change', function(e) {
    ticketPrice=+e.target.value;
    // movie_price.innerHTML=ticketPrice*count+ '$';
    setMovieData(e.target.selectedIndex,e.target.value);
    show_price();
    

}) 
// event for action of seat selection porcess
ticket_container.addEventListener('click',function(e){
     
    if(e.target.classList.contains('seat') &&
       !e.target.classList.contains('reserved')) {
        e.target.classList.toggle('selected');
        show_price();
       }


    
    
    })

function setMovieData(movieIndex,moviePrice) {
    localStorage.setItem('selectedMovieIndex',movieIndex);
    localStorage.setItem('moviePrice',moviePrice);
}









function show_price () {

    //getting updated number of selected seats
    let selected_seats=document.querySelectorAll('.ticket_container .seat.selected'); 
    count=selected_seats.length;
    movie_price.innerHTML=movie_selector.value*count+ '$';
    seat_count.innerHTML=count;
    
    
    // saving selected seats and their index to local storages
    const seats_index=[...selected_seats].map(function(seat){
        return [...seats].indexOf(seat);
    });
    localStorage.setItem('selected_seats',JSON.stringify(seats_index)) ;

}

function populateUI() {

    const selected_seats=JSON.parse(localStorage.getItem('selected_seats'));
    const selectedMovieIndex= +localStorage.getItem('selectedMovieIndex');
    const moviePrice= localStorage.getItem('moviePrice');
    movie_selector.selectedIndex=selectedMovieIndex;
    show_price();


    if (selected_seats !== null && selected_seats.length > 1) {
        seats.forEach(function(seat,index) {
            if (selected_seats.indexOf(index) > -1) {
                seat.classList.add('selected');
            }
        })      
    }
        
    
}
