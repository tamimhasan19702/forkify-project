
import * as model from './model/model.js'
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
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

 //update results view to mark selected search results

 resultsView.render(model.getSearchResultsPerPage());
 bookmarkView.update(model.state.bookmarks);

//loading recipe
await model.loadRecipe(id);
const {recipe} = model.state;
//rendering recipe
//recipeView.render(model.state.recipe)
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
  //render initial pagination
  
  paginationView.render(model.state.search);

  

  }catch(err){
    console.log(err)
  }
}


const controlPagination = function(goToPage){
  console.log('page controller');
  //  resultsView.render(model.state.search.results);
  resultsView.render(model.getSearchResultsPerPage(goToPage))
  //render initial pagination
  
  paginationView.render(model.state.search);
}



const controlServings= (newServings) => {
  //servings update
   model.updateServings(newServings)

   //recipe view render
   recipeView.update(model.state.recipe)
}


const controlAddBookMark = () => {
  //Add and remove bookmark
  if(!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);


  // update recipe view
  recipeView.update(model.state.recipe);

  bookmarkView.render(model.state.bookmarks);
}

const init  = () => {
 recipeView.addHandlerRender(controlRecipes);
 recipeView.addHandlerUpdateServings(controlServings);
 recipeView.addHandlerBookmark(controlAddBookMark);
 searchView.addHandlerSearch(controlSearchResults);
 paginationView.addHandlerClick(controlPagination);

  }
  init()