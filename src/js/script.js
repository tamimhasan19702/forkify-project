import icons from 'url:../../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

 const timeout = function(s){
  return new Promise(function(_,reject){
    setTimeout(function(){
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    },s * 1000);
  });
 };


 //api - https://forkify-api.herokuapp.com/v2

 //////////////////////////////////////////

const renderSpinner = function(parentEl){
  const markUp = `
  <div class="spinner">
    <svg>
        <use href="${icons}#icon-loader"></use>
    </svg>
   </div>
  `
  parentEl.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin',markUp);
}


const showRecipe = async function(){
try{

 const id = window.location.hash.slice(1); 
  //loading recipe
renderSpinner(recipeContainer);  
const res = await fetch(
  `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
)
const data = await res.json(); 

if(!res.ok) throw new Error(`${data.message} (${res.status})`);


let {recipe} = data.data;
recipe = {
  id: recipe.id,
  title: recipe.title,
  publisher: recipe.publisher,
  sourceUrl: recipe.source_url,
  image: recipe.image_url,
  servings: recipe.servings,
  cookingTime: recipe.cooking_time,
  ingredients: recipe.ingredients
}

console.log(recipe);
//rendering recipe
const markUp = `
<figure class="recipe-fig">
<img src="${recipe.image}" alt="${recipe.title}" class="recipe-img">
<h1 class="recipe-title">
    <span>${recipe.title}</span>
</h1>
</figure>

<div class="recipe-details">
<div class="recipe-info">
    <svg class="recipe-info-icon">
     <use href="${icons}#icon-clock"></use>
    </svg>
    <span class="recipe-info-data recipe-info-data-minutes">${recipe.cookingTime}</span>
    <span class="recipe-info-text">Minutes</span>
</div>

 <div class="recipe-info">
    <svg class="recipe-info-icon">
      <use href="${icons}#icon-users"></use>
    </svg>
    <span class="recipe-info-data recipe-info-data-people">${recipe.servings}</span>
    <span class="recipe-info-text">Servings</span>
 
<div class="recipe-info-buttons">
    <button class="btn-tiny btn-increase-servings">
     <svg>
        <use href="${icons}#icon-minus-circle"></use>
     </svg>
    </button>
    <button class="btn-tiny btn-increase-servings">
        <svg>
            <use href="${icons}#icon-plus-circle"></use>
        </svg>
    </button>
</div>
</div> 

 <div class="recipe-user-generated">
<svg>
    <use href="${icons}#icon-user"></use>
</svg>
</div>
<button class="btn-round">
<svg>
    <use href="${icons}#icon-bookmark-fill"></use>
</svg>
</button>
</div>

<div class="recipe-ingredients">
<h2 class="heading-2">Recipe ingredients</h2>
<ul class="recipe-ingredient-list">

${recipe.ingredients.map( ing => {
  return `
  <li class="recipe-ingredient">
        <svg class="recipe-icon">
         <use href="${icons}#icon-check"></use>
        </svg>
        <div class="recipe-quantity">${ing.quantity}</div>
        <div class="recipe-description">
            <span class="recipe-unit">${ing.unit}</span>
            ${ing.description}
        </div>
    </li>
  `
}).join('')}
    
</ul>
</div>

<div class="recipe-directions">
<h2 class="heading-2">How to cook it</h2>
<p class="recipe-directions-text">
    This recipe was carefully designed and tested by 
    <span class="recipe-publisher">${recipe.publisher}</span>
 PLease check out directions at their website.
</p>
<a href="${recipe.sourceUrl}" class="btn-small recipe-btn" target="blank">
    <span>Directions</span>
    <svg class="search-icon">
        <use href="./img/icons.svg#icon-arrow-right"></use>
    </svg>
</a>
</div>
`
recipeContainer.innerHTML = '';
recipeContainer.insertAdjacentHTML('afterbegin',markUp); 

}catch(err){
  alert(err)
}
}

showRecipe()

arr = ['hashchange','load'];
arr.forEach(el => {
  window.addEventListener(el,showRecipe)
});

