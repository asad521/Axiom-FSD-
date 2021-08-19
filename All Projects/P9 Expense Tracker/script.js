const discription = document.getElementById("discription");
const amount = document.getElementById("amount");
const history = document.getElementById("history");
const addTransaction = document.getElementById("addTransaction");
const income = document.querySelector(".income span");
const expense = document.querySelector(".expense span");
console.log(discription, amount, history, addTransaction, income)
incomeArr = [];
incomeVar = null;//for local storage
expenseVar = null;//for local storage
historyArr = [];//for local storage
historyObj = []//for local storage
console.log(typeof historyObj)
console.log(typeof historyObj)
console.log(historyObj)
var elementt = {}, cart = [];

// var element = {}, cart = [];

number = 0;
// populateUI();
// addTransactionF();
ba={hoh:'asdf'}
console.log(ba)
addTransaction.addEventListener('click', addTransactionF);

function addTransactionF() {
    number = number + 1;
    // console.log(discription, amount, history,addTransaction)
    console.log("Event Checked")
    const transAmount = amount.value;
    console.log(transAmount);
    console.log("Event Checked")
    const reason = discription.value;
    // console.log(reason, money)
    let element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<div><reason> ${reason}</reason> <amount> ${transAmount}</amount></div>`;
    history.appendChild(element);
    const child = document.querySelectorAll(".person span");
    console.log(child);
    // s.style.Color="blue";
    //for local storage object is storeds
    // historyObj[number] = [reason, transAmount];
   
    
    // elementt.id = reason;
    // elementt.quantity = transAmount;
    // cart.push(elementt); 
    // localStorage.setItem('history',  JSON.stringify(cart));
    // localStorage.setItem('number', JSON.stringify(number));
    updateCurrent(transAmount);
    add2Local();

}
function add2Local() {

    const get_history=document.querySelectorAll(".history .person > div > reason")
    console.log(get_history);
    // get_history.forEach(item =>{ console.log(item)}
    get_history.forEach(item =>
        
        {
           console.log(item)
           historyArr.push(item.innerHTML)
    
        })
         console.log(historyArr)
    //         console.log("==================================")
    //         console.log(item)
    //         console.log("==================================")
    //      }

}

    
    // localStorage.setItem('history',  JSON.stringify(cart));
    // localStorage.setItem('number', JSON.stringify(number));



function updateCurrent(transAmount) {
    const first = (transAmount[0]);    //for checking expense/income
    console.log(transAmount)
    console.log("this is first "+first)
    const money = parseInt(transAmount);
    console.log("thias is the  interger value of transtion ammount" + money)
    if (first === '-') {
        console.log("This is expense")
        console.log(first)
        let old = parseInt(expense.innerText);
        let added = old + money;
        expense.innerText = `${added}`;
        incomeVar = added;
        console.log(incomeVar);
        localStorage.setItem('expense', JSON.stringify(incomeVar));


    } else {
        console.log("This is addition")
        let old = parseInt(income.innerText);
        let added = old + money;
        income.innerText = `${added}`;
        expenseVar = added;
        localStorage.setItem('income', JSON.stringify(expenseVar));
        console.log(expenseVar);
    }
}


function populateUI() {

    sExpense = localStorage.getItem('expense');
    sIncome = localStorage.getItem('income');
    sHistory = JSON.parse(localStorage.getItem('history'));
    number = JSON.parse(localStorage.getItem('number'));


    console.log(sExpense)
    console.log(sIncome)
    console.log(typeof sHistory)
    // console.log(reason, money)
    for(key in sHistory) {
        
        // console.log( sHistory[key][0])      //this is reason
        // console.log( sHistory[key][1])      //this is amount
        let element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<span> ${sHistory[key][0]}</span> <span> ${ sHistory[key][1]}</span>`;
        history.appendChild(element);
        const child = document.querySelectorAll(".person span");
        console.log(child);
        // updateCurrent(sExpense);
        // updateCurrent(sIncome);

    }
   
    
}
