//Get DOM elements
const score=document.getElementById('score');
const timeElement=document.getElementById('time');
const user_input=document.getElementById('user_input');
const wordElement=document.getElementById('word');
const scoreElement=document.getElementById('score');
const gameover=document.getElementById('gameover ');
const settings=document.getElementById('settings');
const setting_button=document.getElementById('settingBtn');
const form=document.getElementById('form');
const difficulty=document.getElementById('difficulty');
const start=document.getElementById('start');
const screen=document.getElementById('screen');
// const settingBtn=document.getElementById('settingBtn');
console.log(settingBtn)
let gameStart=false;
console.log(start)
start.addEventListener('click',()=>{
    // screen.style.display="none";
    screen.classList.add('remove');
    setTimeout(()=>{
        generateWord();
        displayWord();
        gameStart=true;

    },1000)
    


})

const words= ['asad','English','about','accept','communication','globalization','city',
'welcome','newspaper','ability','able','circle','intelligent','destitute','urban','rular','serail',
'list','thankyou','coding','temperature','translation','length','hate','current','elite','parallel',
'programming','love','Sport','great','greed','artificial','foul','expression','automatic',
'activitate']

//place holder for words

let randomWord;
// assinging intial values
let initalScore=0;
let initialTime=60;
//getting the difiicult level from local storage and update
let initalDifficulty=localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') :'ease';
// console.log(initalDifficulty)
// render value for difficulty level drop down
difficulty.value=initalDifficulty;
// let initalDifficulty=;
user_input.focus();
//function of random word generation


function generateWord() {
   
    const generateWord=words[Math.floor(Math.random()*words.length)]
    // console.log(generateWord);
    return generateWord;
    
}




//funtion to display random word
function displayWord(){
    randomWord=generateWord();
    // console.log(randomWord)
    //display on screen
    wordElement.innerText=randomWord;
    

}

// event listner to check user input
user_input.addEventListener('input' ,e => {
    let userInput=e.target.value;
    console.log(userInput)
    //if user type correct word
    console.log(randomWord)
    if (userInput===randomWord) {
        console.log("condition met")
        generateWord();
        displayWord();
        incrementScore();
        //if word is corrent ,also increast time
        if (initalDifficulty === 'easy') {
            initialTime += 5;
        } else if (initalDifficulty === 'medium') {
            initialTime += 3;
        } else (initalDifficulty === 'hard'); {
            initialTime += 1;
        }
        // //////////
        timeElement.innerText=initialTime +" sec";
        console.log("end oof incemnt")
        console.log("start oof incemnt")
        console.log(userInput);
        //clear the input field for new word
        e.target.value='';
    }
    
});

function incrementScore() {
    
    initalScore++;
    scoreElement.innerText= "Score-"+initalScore;
    ;

}

//time generation

const timeInterval=setInterval(timeDecrement,1000);

//timer fucntion

function timeDecrement() {
    if(gameStart) {
    initialTime--;
    // console.log(initialTime)
    timeElement.innerText=initialTime +" sec";
    if (initialTime===0) {
        clearInterval(timeInterval);
        showGameover();
    }} else {
        //do nothing
    }
}


function showGameover() {

    gamevoer.style.display='flex';
    gamevoer.innerHTML=
    ` 
    <h2>Time UP!</h2>
    <p>Your Score is : ${initalScore} </p>
    <button onclick="location.reload()">Reset</button>

    `

}

//for setting and difficult button

setting_button.addEventListener('click',showSettings);
function showSettings(){

    settings.classList.toggle('hide');

}

//to check difficulty level change

settings.addEventListener('change',e =>{
    //get difficult level
    const initalDifficulty=e.target.value;
    console.log(initalDifficulty)
    //save difficult in ls
    localStorage.setItem('difficulty',initalDifficulty);

})