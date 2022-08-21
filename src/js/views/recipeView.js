// importing necessary values
import icons from 'url:../../../img/icons.svg';
import { Fraction } from 'fractional';

// recipeView class
class recipeView {
    #primaryContainer = document.querySelector('.recipe');
    #data;

    render(data){
        this.#data = data;
       const markUp = this.#generateMarkup(); 
      this.#clear();
      this.#primaryContainer.insertAdjacentHTML('afterbegin',markUp) ;
    }

    #clear(){
    this.#primaryContainer.innerHTML = ''; 
    }

    #generateMarkup(){
        return `
        <figure class="recipe-fig">
        <img src="${this.#data.image}" alt="${this.#data.title}" class="recipe-img">
        <h1 class="recipe-title">
            <span>${this.#data.title}</span>
        </h1>
      </figure>
    
       <div class="recipe-details">
        <div class="recipe-info">
            <svg class="recipe-info-icon">
             <use href="${icons}#icon-clock"></use>
            </svg>
            <span class="recipe-info-data recipe-info-data-minutes">${this.#data.cookingTime}</span>
            <span class="recipe-info-text">Minutes</span>
        </div>
    
         <div class="recipe-info">
            <svg class="recipe-info-icon">
              <use href="${icons}#icon-users"></use>
            </svg>
            <span class="recipe-info-data recipe-info-data-people">${this.#data.servings}</span>
            <span class="recipe-info-text">Servings</span>
         
        <div class="recipe-info-buttons">
            <button class="btn-tiny btn-increase-servings">
             <svg>
                <use href="${icons}#icon-minus-circle"></use>
             </svg>
            </button>
            <button class="btn-tiny btn-increase-servings">
                <svg>
                    <use href="${icons}#icon-plus-circle"></use>
                </svg>
            </button>
        </div>
       </div> 
     
      <div class="recipe-user-generated">
        <svg>
            <use href="${icons}#icon-user"></use>
        </svg>
     </div>
     <button class="btn-round">
        <svg>
            <use href="${icons}#icon-bookmark-fill"></use>
        </svg>
     </button>
    </div>
    
    <div class="recipe-ingredients">
        <h2 class="heading-2">Recipe ingredients</h2>
        <ul class="recipe-ingredient-list">
           
        ${this.#data.ingredients.map(ing => {
          return `
          <li class="recipe-ingredient">
                <svg class="recipe-icon">
                 <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe-quantity">${ ing.quantity ? new Fraction(ing.quantity).toString() : ''}</div>
                <div class="recipe-description">
                    <span class="recipe-unit">${ing.unit}</span>
                    ${ing.description}
                </div>
            </li>
          `
        }).join('')}
         
        </ul>
    </div>
    
    <div class="recipe-directions">
        <h2 class="heading-2">How to cook it</h2>
        <p class="recipe-directions-text">
            This recipe was carefully designed and tested by 
            <span class="recipe-publisher">${this.#data.publisher}</span>
         PLease check out directions at their website.
        </p>
        <a href="${this.#data.sourceUrl}" class="btn-small recipe-btn" target="blank">
            <span>Directions</span>
            <svg class="search-icon">
                <use href="${icons}#icon-arrow-right"></use>
            </svg>
        </a>
        </div> 
        `
    }

    renderSpinner(){
            const markUp = `
            <div class="spinner">
                <svg>
                    <use href="${icons}#icon-loader"></use>
                </svg>
               </div>
            `
            this.#primaryContainer.innerHTML = '';
            this.#primaryContainer.insertAdjacentHTML('afterbegin',markUp);
            
    } 
}

export default new recipeView();