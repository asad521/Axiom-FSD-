const main = document.getElementById('main');
const addUserBtn = document.getElementById('user');
const doubleBtn = document.getElementById('double');
const showMill = document.getElementById('showMillioner');
const filterBtn = document.getElementById('sort');
const calculateWealth = document.getElementById('calculateWealth');

let data = [];
// add random user
addUserBtn.addEventListener('click', function (e) {
    getRandomUser();
})
// double money for user
doubleBtn.addEventListener('click', function (e) {
    data = data.map(user => { 
        console.log(user.money*2);
        return { 
        ...user, money: user.money * 2 } }
    )
        updateDom();
})
// show richest at the top
showMill.addEventListener('click', sortByRichest )

function sortByRichest() {
    
    data.sort((a,b)=>b.money - a.money);
    updateDom();
}
// show person having amount greater than 1 million
filterBtn.addEventListener('click', filterMill )

function filterMill() {
    data=data.filter(user => user.money >1000000);
    console.log(user.money)
    updateDom();
}

//show total wealth event and function by reduce function
calculateWealth.addEventListener('click',showTotalWealth);
function showTotalWealth() {
    updateDom();
    const wealth=data.reduce((acc,user) => (acc +=user.money),0 );
    // console.log(formateMoney(wealth))

    const wealthEl= document.createElement('div');
    wealthEl.innerHTML= `<h3>Total Wealth:<strong>${formateMoney(wealth)}</strong>
    <h3>`;
    main.appendChild(wealthEl);
}
//fetch user using api

// function getRandomUser() {
//     fetch('https://randomuser.me/api')
//     .then(res=>res.json())
//     .then(data=>console.log(data));
// }
async function getRandomUser() {
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    // console.log(data)
    const user = data.results[0];

    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 100000)
    };

    addData(newUser);

}
function addData(adduser) {
    data.push(adduser);
    // console.log(data);
    updateDom();
}
//
function updateDom(providedData = data) {

    //clear main div
    main.innerHTML = '<h2><strong class="person">Person</strong>Wealth</h2>';
    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong> ${item.name} </strong> ${formateMoney(item.money)}`;
        main.appendChild(element);
    })
}

function formateMoney(number) {
    return '$' + number.toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

}