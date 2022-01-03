const messageEl =document.getElementById('message');



function generateRandomNumber(){
    return  Math.floor(Math.random() * 100+1)


}
const randomNumber =    generateRandomNumber();
console.log(randomNumber)
window.SpeechRecognition=window.SpeechRecognition  || window.webkitSpeechRecognition;
// console.log(generateRandomNumber())

let recognition= new window.SpeechRecognition();


//Start recognition 
// recognition.addEventListener('audiostart', function() {
//     console.log('Audio capturing started');
//   });
  recognition.start();

recognition.addEventListener('result',speakResult)


//function for output of speak in microphone

function speakResult(e) {
    console.log(e)
    const msg= e.results[0][0].transcript;//return of SR api is object which have inner object 
    renderMsg(msg);
    checkNumber(msg);
    console.log(msg)
}

// function for display the message
function renderMsg(msg) {

    messageEl.innerHTML = 
    `<div>You Said:</div>
    <span class="box" id="box">${msg}</span>
    `
}

//check message with random number

function checkNumber(msg) {
    const number= +msg; //+convert to number from string
    //check if number is valid
        
    if (Number.isNaN(number)) {
        console.log('trigger')
        messageEl.innerHTML  = 
        `<div>This is not a valid Number. Try Again !</div>

        `

    } else if (number >100 || number <1) {
        messageEl.innerHTML =` 
    <div>Number must be greater than 0 and less than 100</div>
        `
    } else if
    // if number is correct
     (number == +randomNumber) {
        document.body.innerHTML=` 
        <div class="finalMessage" id="finalMessage">
        <H2>You Have correct the right number ${msg}</H2>
        <h3>Pressed the Button to Start the game Again</h3>
        <button class="restart" id="restart">Restart</button>
        </div>
        `        
    } else if (number > +randomNumber) {
        messageEl.innerHTML +=` 
        <div>Guess Lower Number .Keep trying</div>
            `
        
    } else  {(number < +randomNumber)
        messageEl.innerHTML +=` 
        <div>Guess Higher Number.Keep trying</div>
            `

    }
    }

    // keep  playing

    recognition.addEventListener('end', () => recognition.start())

    // event for button to restart game

    // const r=document.getElementById('restart');
    // console.log(r)
    //     r.addEventListener('click' ,() => {
    //     window.location.reload();
    // })

    document.body.addEventListener('click', (e) => {
        if(e.target.id='restart') {
            window.location.reload();
        }
    })
    
    
