const recipeCounter = document.querySelector(".recipe");
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request Took to long to load! Timeout after ${s} second`));
        }, s * 1000);
    });
};

//# sourceMappingURL=index.09c24910.js.map
