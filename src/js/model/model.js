import { async } from "regenerator-runtime"
import { API_URL, RES_PER_PAGE } from "../config"
import { getJSON } from "../helper"

export const state = {
    recipe: {},
    search: {
      query: '',
      results: [],
      page: 1,
      resultsPerPage: RES_PER_PAGE,
    }
}

export const loadRecipe = async function (id){
    try {
     const data = await getJSON(`${API_URL}/${id}`)
      
      const {recipe} = data.data;
        state.recipe = {
        id: recipe.id,
        title: recipe.title,
        publisher: recipe.publisher,
        sourceUrl: recipe.source_url,
        image: recipe.image_url,
        servings: recipe.servings,
        cookingTime: recipe.cooking_time,
        ingredients: recipe.ingredients
      }
      
    }catch(err){
        throw(err)
    }     
}


//recipe functionality

export const loadSearchResults = async function(query){
  try{
  state.search.query = query;

  const data = await getJSON(`${API_URL}?search=${query}`);
  console.log(data)

  state.search.results = data.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    };
  });
  }catch(err){
    console.log(`${err}`);
    throw err;
  }
}

// pagination

export const getSearchResultsPerPage = (page = state.search.page) => {
  state.search.page = page;
  const start = (page-1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start,end);
}


<<<<<<< HEAD
export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
 state.recipe.servings = newServings
=======
export const updateServings = (newServings) => {
state.recipe.ingredients.forEach(ing  => {
  ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
});

state.recipe.servings = newServings;
>>>>>>> adffb84040f82e9adf8c69f3c35ed14cc8f5a6bb
}