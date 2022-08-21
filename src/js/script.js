// importing mvc files
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// input values
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// ================================================


const timeout = function(s){
   return new Promise (function(_,reject){
    setTimeout(function(){
      reject(new Error(`Request Took to long to load! Timeout after ${s} second`));
    }, s * 1000 );
   });
}

// ================================================

// recipe showcase
const controlRecipes = async function(){
    try{
     const id = window.location.hash.slice(1);
     if(!id) return;

    //  spinner
     recipeView.renderSpinner()
     
    // inserting api data
    await model.loadRecipe(id); //one asynch function calling another async function
    
    // rendering recipe data
    recipeView.render(model.state.recipe);

    }catch(err){

    alert(err);

    }
};

['hashchange','load'].forEach(ev => window.addEventListener(ev, controlRecipes))
