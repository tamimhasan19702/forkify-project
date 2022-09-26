
import * as model from './model/model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';


 //api - https://forkify-api.herokuapp.com/v2

 //////////////////////////////////////////


const controlRecipes = async function(){
try{

 const id = window.location.hash.slice(1); 
 //render spinner
 if(!id) return;
 recipeView.renderSpinner();  
//loading recipe
await model.loadRecipe(id);
const {recipe} = model.state;
//rendering recipe
recipeView.render(model.state.recipe)
}catch(err){
  recipeView.renderError()
}
}

//search query
const controlSearchResults = async function (){
  try{

    resultsView.renderSpinner();
// get search query
  const query = searchView.getQuery();
  if(!query) return;
//load search results
   await model.loadSearchResults('pizza')
//render results

  }catch(err){
    console.log(err);
  }  
}

const init  = () => {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  }
  init()