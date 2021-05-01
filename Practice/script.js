const seat_count=document.getElementById('seat_count');
const movie_price=document.getElementById('price');
const movie=document.getElementById('movie');
const movie_selector=document.getElementById('movie_selector');
const ticket_container=document.querySelector('.ticket_container');
const seats=document.querySelectorAll('.ticket_container .seat:not(.reserved)');
let  value=+movie.value;
console.log(movie);

// console.log(movie.text );    
// console.log(seats);
// console.log(typeof value);

movie_selector.addEventListener('change', function(e) {
    console.log(e.target.value);
    show_price();


}) 





ticket_container.addEventListener('click',function(e){
     
    if(e.target.classList.contains('seat') &&
       !e.target.classList.contains('reserved')) {
        //    console.log(e.target);
        e.target.classList.add('selected');
        show_price();
       }



})


function show_price () {
    
    //getting updated number of selected seats
    let seats=document.querySelectorAll('.ticket_container .seat.selected'); 
    count=seats.length;
    console.log(count);
    movie_price.innerHTML=movie_selector.value*count+ '$';
    seat_count.innerHTML=count;


}