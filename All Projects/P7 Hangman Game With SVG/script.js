const figurePart = document.querySelectorAll(".figure-part");
const wrongLetters = document.querySelector(".wrongLetterContainer span");
const wordEl = document.querySelector(".words");
const popupContainer = document.getElementById("popupContainer");
const playAgain = document.querySelector(".popupContainer button");
const popMessage = document.querySelector(".popupContainer h3");
const notification = document.getElementById("notification");
const alpha = document.getElementById("alpha");
wordsDatabase = ["application", "programming", "database", "science"];
generateRandomWord();
function generateRandomWord() {
    selectedWord = wordsDatabase[Math.floor(Math.random() * wordsDatabase.length)]
    // console.log(selectedWord);
}
console.log(selectedWord);

const correctedones = []
const wrongones = [];
displayWord();
function displayWord() {
    wordEl.innerHTML = selectedWord.split('').map(letter =>
        `<span class="letters">${(correctedones.includes(letter) ? letter : ' ')
        }</span>                   `
    ).join('');
    // console.log(wordEl.innerHTML)
    actualWord = wordEl.innerText.replace(/\n/ig, ''); //to remove new line character
    actualWord = actualWord.toLowerCase();
    // console.log(actualWord + "This is actual word");
    // console.log(selectedWord + "This is selected word");
    // console.log(actualWord);
    // console.log(selectedWord);
    if (actualWord === selectedWord) {
        popMessage.innerText = "Congratulation..You have won "
        popupContainer.classList.add("add");
    }

}
function displaywrong() {
    wrongLetters.innerText = wrongones;
    wrongones.forEach((element, index) => {
        figurePart[index].style.display = 'flex'
    })
    if (wrongones.length === figurePart.length) {
        popMessage.innerText = "Sorry..You have Lost "
        popupContainer.classList.add("add");
        // call play again function
    }


}

//Event Key Capture
window.addEventListener("keydown", e => {
    //workflow
    //get range of key A-z ,
    //push correct and wrong letter to respective array 
    //call display function for both  
    // added bcz else if is not working
    // show popmessage for repeated-pressed button

    // to display/hide popup for repeated word
    if (correctedones.includes(e.key)) {
        notification.classList.add("show");
        setTimeout(e =>
            notification.classList.remove("show"), 1000)
    }

    // console.log(e.keyCode);
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        if (selectedWord.includes(e.key)) {
            correctedones.push(e.key);
            displayWord();
            // console.log(correctedones);
        } else if (correctedones.includes(e.key)) {
            // console.log("you have already");
            notification.classList.add("show");
        } else {
            wrongones.push(e.key);
            displaywrong();
        }

    }


})

//Event for playagain
//play again fuction resetting everything

playAgain.addEventListener('click', e => {
    //first remove pupup

    popupContainer.classList.remove("add");
    //empty arrays
    correctedones.splice(0);
    wrongones.splice(0);
    // generate new random word
    generateRandomWord();
    displaywrong();
    displayWord();
    // also remove the body display
    figurePart.forEach((element, index) => {
        figurePart[index].style.display = 'none'
    })





})


    alpha.addEventListener('click', e => {

        if (correctedones.includes(e.target.innerHTML)) {
            notification.classList.add("show");
            setTimeout(e =>
                notification.classList.remove("show"), 1000)
        }

        if (e.target.classList.contains('button')) {

            console.log(correctedones);
            console.log(selectedWord);
            if (selectedWord.includes(e.target.innerHTML)) {
                console.log("Condition is True");
                correctedones.push(e.target.innerHTML);
                displayWord();
            } else if (correctedones.includes(e.target.innerHTML)) {
                notification.classList.add("show");
            } else {
                wrongones.push(e.target.innerHTML);
                displaywrong();
            }
        }
    })