// importing mvc files
import * as model from './model.js';
import recipeView from './views/recipeView.js';

// input values
import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

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
    recipeView.renderError()
    }
};

const init = () => {
    recipeView.addRecipeHandler(controlRecipes)
}
init()
