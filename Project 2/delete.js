const container =document.querySelector('.container');
const seats=document.querySelectorAll('.row .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movieSelect=document.getElementById('movie');
let ticketPrice=+movieSelect.value;



// console.log(typeof +ticketPrice);
 

// container.addEventListener('click', function (e){
// })

function updateSelectedcount(){
    //Update total and count
    const selectedSeats=document.querySelectorAll('.row .seat.selected');
    const seatsIndex=[...selectedSeats].map(function(seat){
        return [...seats].indexOf(seat);
    });
    console.log(seatsIndex);


    const selectedSeatsCount=selectedSeats.length;
    count.innerText=selectedSeatsCount;
    total.innerText=selectedSeatsCount * ticketPrice ;
    // For local storage
    //1.Copy selected seats into array ,2.map through array,3.reutrn new arr of index
    //by spread operator

  

    // console.log(seatsIndex);



}

//Movie select event

movieSelect.addEventListener('change' , (e)=>  {
    ticketPrice=+e.target.value;
    updateSelectedcount();
})


//Seat event listener
container.addEventListener('click', (e)=> {

    if(e.target.classList.contains('seat') &&
     !e.target.classList.contains('occupied')) {

        e.target.classList.toggle('selected');
        updateSelectedcount();
    }});