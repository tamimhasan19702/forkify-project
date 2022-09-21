
import * as model from './model/model.js'
import recipeView from './views/recipeView.js';
//import icons

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




const controlRecipies = async function(){
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

controlRecipies()

arr = ['hashchange','load'];
arr.forEach(el => {
  window.addEventListener(el,controlRecipies)
});

