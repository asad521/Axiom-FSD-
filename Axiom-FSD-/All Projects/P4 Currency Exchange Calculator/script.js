const currency_one = document.getElementById("currency_one");
const currency_two = document.getElementById("currency_two");
const swap = document.getElementById("swap");
const amount_one = document.getElementById("amount_one");
const amount_two = document.getElementById("amount_two");
const display = document.getElementById("text");
pakCurrencyBtn=document.getElementById("pakCurrencyBtn");
pakCurrencyContainer=document.getElementById('pakCurrencyContainer');
pakCurrencyBtn.addEventListener('click', fetchCurrency)

//Event Listener
currency_one.addEventListener('change', updateRate);
currency_two.addEventListener('change', updateRate);
swap.addEventListener('click', updateRate2);
amount_one.addEventListener('input', updateRate);
amount_two.addEventListener('input', updateRate);


// fetch the current rate and update DOM
function updateRate() {
    const selectedCurrency1 = currency_one.value;
    const selectedCurrency2 = currency_two.value;
    // console.log( selectedCurrency1);

    fetch(` https://v6.exchangerate-api.com/v6/7526a7ceef16a1f07acc8c3a/latest/${selectedCurrency1}`)
        .then(res => res.json())
        .then(function (data) {
            console.log(data);
            display.innerText = `1 ${selectedCurrency1} = ${data.conversion_rates[selectedCurrency2]} ${selectedCurrency2} `;
            // amount_two.innerText=`${selectedCurrency2}`
            // console.log(data.conversion_rates[selectedCurrency2]
            amount_two.value = (data.conversion_rates[selectedCurrency2] * amount_one.value).toFixed(2);

        })

}

function updateRate2() {

    temp2 = currency_two.value;
    currency_two.value = currency_one.value;
    currency_one.value = temp2;

    updateRate();

}

// function calculate() {
//     fetch('items.json').then(res => res.json()
//         .then(data => console.log(data)))
// }

// calculate();

// =====================Comparision pak=====

function fetchCurrency() {
    console.log("sfasdf");
    fetch(`https://v6.exchangerate-api.com/v6/7526a7ceef16a1f07acc8c3a/latest/USD`)
    .then(res => res.json())
    .then(function (data) {
        
        const currency= data.conversion_rates;
        console.log(currency)
        addElement(currency);

    })

}
function addElement(currency) {
        console.log(currency)
        for (keys in currency) {
            console.log(keys)
             countryFullName=countryName(keys);
            console.log(keys+ ":"+currency[keys])
            const element = document.createElement('div');
            element.classList.add('elementt'); //only 4 css  style
            element.innerHTML = `${countryFullName}: ${currency[keys]}`;
            pakCurrencyContainer.appendChild(element); 
            
        }


    }
    function countryName(ccode)  {
    console.log(typeof ccode)
    country_object={USD:"United States of America", PAK:"Pakistan", IND:"INDIA"};
    return country_object[ccode]
    
    }






















