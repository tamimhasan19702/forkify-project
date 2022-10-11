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
    },
    bookmarks: [],
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

      if(state.bookmarks.some( bookmark => bookmark.id === id)){
        state.recipe.bookmarked = true;
      }else{
        state.recipe.bookmarked = false;
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

  state.search.results = data.data.recipes.map(rec => {
    return {
      id: rec.id,
      title: rec.title,
      publisher: rec.publisher,
      image: rec.image_url,
    };
  });
  state.search.page = 1;
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



export const updateServings = function(newServings){
  state.recipe.ingredients.forEach(ing => {
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
 state.recipe.servings = newServings;
}

const persistBookmarks = function(){
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
}

export const addBookmark = function(recipe){
  state.bookmarks.push(recipe);

  if(recipe.id === state.recipe.id) state.recipe.bookmarked = true;
persistBookmarks();

}

export const deleteBookmark = function(id){
  const index = state.bookmarks.findIndex(el => el.id === id);
  state.bookmarks.splice(index,1);

  if(id === state.recipe.id) state.recipe.bookmarked = false;

  persistBookmarks();
}

const init = function(){
  const storage = localStorage.getItem('bookmarks');
  if(storage) state.bookmarks = JSON.parse(storage)
};
init()

const clearBookmarks = function(){
  localStorage.clear('bookmarks');
}

//clearBookmarks();

export const uploadRecipe = async newRecipe => {
 console.log(Object.entries(newRecipe));
 const ingredients = Object.entries(newRecipe).filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '').map(ing => {
  const ingArr = ing[1].replaceAll(' ', '').split(',');

  const [quantity,unit,description] = ingArr
   
  if(ingArr.length !== 3) throw new Error(`Wrong ingredient formate!! please use the right formate`);

  return {quantity: quantity ? +quantity:null ,unit,description};
 });

 console.log(ingredients);

} 