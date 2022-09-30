
import * as model from './model/model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
//import icons

import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime';

if(module.hot){
  module.hot.accept();
}


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

const controlSearchResults = async function(){
  try{
    resultsView.renderSpinner()

    //get search queries
   const query = searchView.getQuery();
   if(!query) return;

   //load search results
   await model.loadSearchResults(query)

   //render search results
   console.log(model.state.search.results)
  //  resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPerPage())
  }catch(err){
    console.log(err)
  }
}



const init  = () => {
 recipeView.addHandlerRender(controlRecipes);
 searchView.addHandlerSearch(controlSearchResults);
  }
  init()