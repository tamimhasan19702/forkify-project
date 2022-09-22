
import * as model from './model/model.js'
import recipeView from './views/recipeView.js';
//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';


 
 //api - https://forkify-api.herokuapp.com/v2

 //////////////////////////////////////////




const controlRecipes = async function(){
try{

 const id = window.location.hash.slice(1); 

 if(!id) return;
 recipeView.renderSpinner();  
  
//loading recipe

await model.loadRecipe(id);
const {recipe} = model.state;

//rendering recipe
recipeView.render(model.state.recipe)




}catch(err){
  alert(err)
}
}

controlRecipes()

arr = ['hashchange','load'];
arr.forEach(el => {
  window.addEventListener(el,controlRecipes)
});

