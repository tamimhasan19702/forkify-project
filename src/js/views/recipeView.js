//icons
import View from './View';
import icons from '../../../img/icons.svg';
import { Fraction } from 'fractional';
class recipeView extends View {
    _parentElement = document.querySelector('.recipe');
    _errorMessage =  `We Couldn't Find The Recipe. Please Try Another One!!`
    _Message =  ``
    
   
    addHandlerRender(handler){
      ['hashchange','load'].forEach(el => window.addEventListener(el,handler));
    }

    addHandlerUpdateServings(handler){
      this._parentElement.addEventListener('click',function(e){
        const btn = e.target.closest('.btn-tiny');
        if(!btn) return;
        console.log(btn)
        const updateTo = +btn.dataset.updateTo

        if(updateTo > 0) handler(updateTo)
      })
    }

    _generateMarkup(){
      return `
      <figure class="recipe-fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe-img">
      <h1 class="recipe-title">
        <span>${this._data.title}</span>
      </h1>
      </figure>
    
      <div class="recipe-details">
      <div class="recipe-info">
        <svg class="recipe-info-icon">
         <use href="${icons}#icon-clock"></use>
        </svg>
        <span class="recipe-info-data recipe-info-data-minutes">${this._data.cookingTime}</span>
        <span class="recipe-info-text">Minutes</span>
      </div>
    
      <div class="recipe-info">
        <svg class="recipe-info-icon">
          <use href="${icons}#icon-users"></use>
        </svg>
        <span class="recipe-info-data recipe-info-data-people">${this._data.servings}</span>
        <span class="recipe-info-text">Servings</span>
     
      <div class="recipe-info-buttons">
        <button class="btn-tiny btn-update-servings" data-update-to="${this._data.servings - 1}">
         <svg>
            <use href="${icons}#icon-minus-circle"></use>
         </svg>
        </button>
        <button class="btn-tiny btn-update-servings" data-update-to="${this._data.servings + 1}">
            <svg>
                <use href="${icons}#icon-plus-circle"></use>
            </svg>
        </button>
      </div>
      </div> 
    
     <div class="recipe-user-generated">
     
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
    
    ${this._data.ingredients.map(this._generateMarkUpGradient).join('')}
        
    </ul>
    </div>
    
    <div class="recipe-directions">
    <h2 class="heading-2">How to cook it</h2>
    <p class="recipe-directions-text">
        This recipe was carefully designed and tested by 
        <span class="recipe-publisher">${this._data.publisher}</span>
     PLease check out directions at their website.
    </p>
    <a href="${this._data.sourceUrl}" class="btn-small recipe-btn" target="blank">
        <span>Directions</span>
        <svg class="search-icon">
            <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </a>
    </div>
    `
        }
        _generateMarkUpGradient(ing) {
          return `
          <li class="recipe-ingredient">
                <svg class="recipe-icon">
                 <use href="${icons}#icon-check"></use>
                </svg>
                <div class="recipe-quantity">${ ing.quantity ? new Fraction(ing.quantity).toString() : '' }</div>
                <div class="recipe-description">
                    <span class="recipe-unit">${ing.unit}</span>
                    ${ing.description}
                </div>
            </li>
          `
        }
   
      
}

export default new recipeView();