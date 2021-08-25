const plus = document.getElementById('plus');
const remove_card = document.getElementById('remove_card');
const add_card_container = document.getElementById('add_card_container');
const add_new_card = document.getElementById('add_new_card');
//above is for showing input field at begining
const submit = document.getElementById('submit');
//getting flipcard
const flip_card = document.getElementById('flip-card');
const flip_card_front = document.querySelector('.flip-card-front p');
const flip_card_back = document.querySelector('.flip-card-back p');
const flip_card_inner = document.getElementById('flip-card-inner');
// getting question and answer
const answerElement = document.querySelector('.answer_container textarea');
const questionElement = document.querySelector('.question_container textarea');
//card container
//nav buttion
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const span = document.querySelector('span');
console.log(previous)
console.log(next)

let index=0;

let cards =[];
// console.log(cards.push('asdf'))
// console.log(cards.push('asdf'))
// console.log(cards)



// to show the input text area of question/answer input
plus.addEventListener('click', e => {
   add_card_container.style.display = 'flex';
   add_new_card.style.opacity = '0';


})

// to hide the input text area of question/answer input
remove_card.addEventListener('click', e => {
   console.log(input_container)
   add_card_container.style.display = 'none';
   add_new_card.style.opacity = '1';

})

//to show the card after input
submit.addEventListener('click', e => {
   // console.log(answerElement.value)
   // console.log(questionElement.value)
   // getting input question/answer and assiging to flip card
   answer = answerElement.value;
   question = questionElement.value;
   // do the submit only if both value is provided
   if (answerElement.value !='' && questionElement.value!='' ) {
     // flip_card_front.innerText=questionElement.value;
   // flip_card_back.innerText=answerElement.value;
   cards.push({answer,question})
   flipCardGeneration(cards,index);
   console.log(cards)
   // console.log('first card element os' + cards[0].answer)
   // console.log('first card element os' + cards[0].question)
   add_card_container.style.display = 'none';
   add_new_card.style.opacity = '1';
   flip_card.style.display = 'flex';
   // clear the inpust fields
   answerElement.value='';
   questionElement.value='';
   }


})
function flipCardGeneration(cards,index) {
console.log(index)
span.innerText=`${index+1}/${cards.length}`;
flip_card_inner.innerHTML=`
<div class="flip-card-front" id="flip-card-front">
   <p>${cards[index].answer}</p>
   </div>
<div class="flip-card-back" id="flip-card-back">
   <p>${cards[index].question}</p>
</div>
   `
}

previous.addEventListener("click", e =>{
   console.log('previous')
if (index===0) { 
   flipCardGeneration(cards,index);
} else {
   index--;
   flipCardGeneration(cards,index);
}

})

next.addEventListener("click", e =>{
   console.log('next')
   console.log(cards.length)
   if (index===cards.length-1) { 
         flipCardGeneration(cards,index);
   } else {
      index++;
      flipCardGeneration(cards,index);
   }
   })