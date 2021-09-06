const main=document.querySelector('main');
const voiceSelect=document.querySelector('select');
const textarea=document.querySelector('textarea');
const readBtn=document.getElementById('readBtn');
const togleBtn=document.getElementById('togleBtn');
const closeBtn=document.getElementById('closeBtn');
const textBox=document.getElementById('textbox');
console.log(voiceSelect)
//database for images stroed localy
const data = [
    {
        image:'./images/1 (1).jpg',
        text:"This is Buffalo"
    },
    {
        image:'./images/1 (2).jpg',
        text:"This is Bird"
    },
    {
        image:'./images/1 (3).jpg',
        text:"This is Galaxy"
    },
    {
        image:'./images/1 (4).jpg',
        text:"This is car"
    },
    {
        image:'./images/1 (5).jpg',
        text:"Man is working on computer."
    },
    {
        image:'./images/1 (6).jpg',
        text:"Coffee is being Served in Hotel."
    },
    {
        image:'./images/1 (7).jpg',
        text:"Picture of a lion"
    },
    {
        image:'./images/1 (8).jpg',
        text:"This shows Work space."
    },
    {
        image:'./images/1 (9).jpg',
        text:"Picture of a plant."
    },
    {
        image:'./images/1 (10).jpg',
        text:"This is food."
    },
    {
        image:'./images/1 (11).jpg',
        text:"This is icecream."
    },
    {
        image:'./images/1 (12).jpg',
        text:"This is foldable Sleekbook."
    },
    
]


data.forEach(item => {

    console.log(item)
    const box=document.createElement('div');

    const { image, text} =item

    box.classList.add('box');
    box.innerHTML=` 
    <img src="${image}" alt=${text} />
    <p class="info">${text}</p>
    `;

    // event listner for each box
    box.addEventListener('click', e => {
        setTextMessage(text); 
        speakText();
        // add cass
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'),1000);
    });

    // event to speaking at each box
    main.appendChild(box);

}) 
// Initialize pseech synth
const message =new SpeechSynthesisUtterance;

// set text
function setTextMessage(text){
    console.log('trigger sextext message with text ' +text)
    message.text=text;
}
//speak text
function speakText() {
    speechSynthesis.speak(message);
}


function creatGrid () {
}






// toggel text box window 
togleBtn.addEventListener('click', e => {
    textBox.classList.toggle('show');
    console.log(textBox)

})

// close text box window 
closeBtn.addEventListener('click', e => {
    textBox.classList.remove('show');
})
// event listner for text box

// store voice from API
let voices=[];
function getVoices (){
    // from stack overflow
    function setSpeech() {
        return new Promise(
            function (resolve, reject) {
                let synth = window.speechSynthesis;
                let id;
    
                id = setInterval(() => {
                    if (synth.getVoices().length !== 0) {
                        resolve(synth.getVoices());
                        clearInterval(id);
                    }
                }, 10);
            }
        )
    }
    
    let s = setSpeech();
    s.then((voices) => {
        // console.log(voices[0])
        console.log(typeof voices)
        voices.forEach(voiceItem => {
            console.log(voiceItem.name)
            voices.push(voiceItem.name)
            const option =document.createElement('option');
            option.value =voiceItem.name;
            option.innerText= `${voiceItem.name} ${voiceItem.lang}`
            voiceSelect.appendChild(option);
        });
    }); 
    

}
speechSynthesis.addEventListener('voicesChanged',getVoices);

getVoices();
//voice 





// it trigger thevent when dropdown is changed.
// it get value and assign it to synth api voice name
voiceSelect.addEventListener('change', setVoice);
function setVoice(e) {
    console.log('change event trigger')
    console.log('Selected Voice is '+e.target.value)
    message.voice= voices.find(voice=>SpeechSynthesisVoice.name=== e.target.value[1]);
    // for(i = 0; i < voices.length ; i++) {
    //     if(voices[i].name === e.target.value[1]) {
    //         message.voice = voices[i];
    //         console.log(message.voice)
    //         console.log(message.voice[i])

    
    //       break;
    //     }}
        console.log(message.voice)

}

//trigger for text niput btn

readBtn.addEventListener('click',e => {
    // console.log('readbtn trigger')
    console.log(textarea.value)
    setTextMessage(textarea.value);
    speakText();

});