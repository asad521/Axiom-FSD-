button=document.getElementById("button");
main=document.getElementById('main');

button.addEventListener('click', fetchCurrency)


function fetchCurrency() {
    fetch(`https://v6.exchangerate-api.com/v6/7526a7ceef16a1f07acc8c3a/latest/USD`)
    .then(res => res.json())
    .then(function (data) {
        
        const currency= data.conversion_rates;
        // console.log(currency);
        // console.log(currency);
        addElement(currency);

    })

}
// let result={"gender":"female","name":{"title":"Mrs","first":"Sheryl","last":"Brown"},"location":{"street":{"number":9958,"name":"Mill Road"},"city":"Kells","state":"South Dublin","country":"Ireland","postcode":16317,"coordinates":{"latitude":"22.8609","longitude":"71.2386"},"timezone":{"offset":"-5:00","description":"Eastern Time (US & Canada), Bogota, Lima"}},"email":"sheryl.brown@example.com","login":{"uuid":"d154f77d-1832-4d9d-a490-19526947616b","username":"angrybutterfly628","password":"milk","salt":"Hmk2M2zs","md5":"2f34a4e2fba8f0cae529fd1ae9754980","sha1":"319892c0df2c01bfe099a0ddc682038cb661cc2d","sha256":"0f1df5655d0fbf12354e14e87ccc6854a52ee4f4699293f564d32d989cb1f534"},"dob":{"date":"1962-11-03T01:38:32.990Z","age":59},"registered":{"date":"2005-04-15T19:20:06.885Z","age":16},"phone":"051-244-1474","cell":"081-709-3746","id":{"name":"PPS","value":"5042824T"},"picture":{"large":"https://randomuser.me/api/portraits/women/38.jpg","medium":"https://randomuser.me/api/portraits/med/women/38.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/women/38.jpg"},"nat":"IE"};
// console.log(typeof result)
// for (i in result) {
//     console.log(result[i]);

// }

function addElement(currency) {
    // const keys = Object.keys(currency);
    // console.log(typeof keys);
    // keys.forEach((key, index) => {
    //     console.log(`${key}: ${currency[key]}`);
    //     const element = document.createElement('div');
    //     element.classList.add('elementt'); //only 4 css  style
    //     element.innerHTML = `${key}: ${currency[key]}`;
    //     container.appendChild(element); 

    // });
        for (keys in currency) {
            console.log(keys+ ":"+currency[keys])
            const element = document.createElement('div');
            element.classList.add('elementt'); //only 4 css  style
            element.innerHTML = `${keys}: ${currency[keys]}`;
            container.appendChild(element); 
            
        }


    }





