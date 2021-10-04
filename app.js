// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=`
// fetch(url)
//     .then(response => response.json())
//     .then(data => displayMeal(data.meals))

// const displayMeal = meals => {
//     for (meal of meals) {
//         console.log(meal)
//     }
// }

document.getElementById('search-button').addEventListener('click', function () {
    document.getElementById('display-meals').innerText = '';
    const searchText = document.getElementById('input-field').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
        .then(response => response.json())
        .then(data => loadMeals(data.meals))
    searchText = '';
})
const loadMeals = searchedMeal => {
    for (meal of searchedMeal) {
        console.log(meal)
        const displayMeals = document.getElementById('display-meals')
        const div = document.createElement('div');
        div.innerHTML = `
        <div id="single-meal">
                <img height="180px" width="200px" src="${meal.strMealThumb}" alt="meal image">
                <h4 id="meal-name">${meal.strMeal}</h4>
            <div id="origin-type">
                <p>Origin: ${meal.strArea}</p>
                <p>Type: ${meal.strTags}</p>
            </div>
                <a class="d-block" id="youtube" target="_blank" href="${meal.strYoutube}">YouTube</a>
            <div id="ingredients">    
                <b class="text-primary">Ingredients:</b>
                <b>${meal.strIngredient1}</b>
                <b>${meal.strIngredient2}</b>
                <b>${meal.strIngredient3}</b>
                <b>${meal.strIngredient4}</b>
                <b>${meal.strIngredient5}</b>
                <b>${meal.strIngredient6}</b>
                <b>${meal.strIngredient7}</b>
                <b>${meal.strIngredient8}</b>
                <b>${meal.strIngredient9}</b>
                <b>${meal.strIngredient10}</b>
                <b>${meal.strIngredient11}</b>
                <b>${meal.strIngredient12}</b>
                <b>${meal.strIngredient13}</b>
                <b>${meal.strIngredient14}</b>
                <b>${meal.strIngredient15}</b>
                <b>${meal.strIngredient16}</b>
                <b>${meal.strIngredient17}</b>
                <b>${meal.strIngredient18}</b>
                <b>${meal.strIngredient19}</b>
                <b>${meal.strIngredient20}</b>
            </div>
                <p id="instructions">${meal.strInstructions}</p>
        </div>
        `
        displayMeals.appendChild(div);
    }
}