const search = document.getElementById('search');
const random = document.getElementById('random');
const submit = document.getElementById('submit');
const results = document.getElementById('searchResults');
const meals = document.getElementById('meals');
const selectedMeals = document.getElementById('selectedMeals');


"editor.autoClosing"
//Events Listners
//submit form

submit.addEventListener('submit', searchMeal);




function searchMeal(e) {
    e.preventDefault();
    //get text from search input
    const searchText = search.value;
    console.log(searchText);
    //check empty field 
    if (searchText.trim()) {
        console.log(searchText);
        //fetching data from API
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => {
                console.log(data, typeof data, results)
                //to check if search results is empty of not
                if (data.meals === null) {
                    results.innerHTML = `<h1>No Receipe is Found for ${searchText}</h1>`
                    meals.innerHTML = '';


                } else {
                    results.innerHTML = `<h1>Search Results  for the ${searchText}</h1>`
                    meals.innerHTML = ``; // for removing previous result
                    data.meals.map(item => {
                        // console.log(item);
                        const main = document.createElement('div');
                        main.classList.add('main');
                        main.innerHTML =
                            `
                        <img src="${item.strMealThumb}" alt="${item.strMeal}">
                        <h3 data_mealID="${item.idMeal}">${item.strMeal}</h3>
                        `
                        meals.appendChild(main)
                    })
                    search.value = ''; // for clearing search text
                    // console.log(meals);
                }

            })
    } else {
        alert('Please Enter the word to Search');
    }

};

//Event Listener
meals.addEventListener('click', e => {
    const mealIdInfo = e.path.find(item => {
        // console.log(item)
        if (item.classList) {
            console.log("inside if ")
            return item.getElementsByTagName('h3');
            // return "asdfasdf" 
        }
        else {
            return false;
        }
        // to check if meal has id



    });
    console.log(mealIdInfo)
    if (mealIdInfo) {
        const mealId = mealIdInfo.getAttribute('data_mealID')
        getMeal(mealId)
    }

});

function getMeal(id) {
    console.log("inside getmeal function" )
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(response => response.json())
        .then(data => {
            console.log( data.meals[0])
        }
        );

}

