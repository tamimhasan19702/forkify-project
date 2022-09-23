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
     
      renderError(){
        const markUp = `
        <div class="error">
         <div>
            <svg>
                <use href="${icons}#icon-alert-triangle">
                </use>
            </svg>
         </div>
        <p>${this._errorMessage}</p>
       </div>
        `
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markUp); 
      }
      renderSuccess(){
        const markUp = `
        <div class="message">
         <div>
            <svg>
                <use href="${icons}#icon-smile">
                </use>
            </svg>
         </div>
        <p>${this._Message}</p>
       </div>
        `
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markUp); 
      }

}

export default new recipeView();