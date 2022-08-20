const recipeCounter = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request Took to long to load! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// ================================================
const showRecipe = async function() {
    try {
        const res = await fetch("https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886");
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message} (${res.status})`);
        let { recipe  } = data.data;
        recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            imgredints: recipe.ingredients
        };
        console.log(recipe);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.09c24910.js.map
