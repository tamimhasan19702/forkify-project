import View from "./View";
import icons from '../../../img/icons.svg'

class resultsView extends View{
  _parentElement = document.querySelector('.results');

  _generateMarkup(){
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join()
    
  }

  _generateMarkupPreview(result){
    return `
    <li class="preview">
    <a href="#${result.id}" class="preview-link preview-link-active">
        <figure class="preview-fig">
            <img src="${result.image}" alt="${result.title}">
        </figure>
        <div class="preview-data">
            <h4 class="preview-title">${result.title} </h4>
            <p class="preview-publisher">${result.publisher}</p>
            <div class="preview-user-generated">
                <svg>
                <use href="${icons}#icon-user"></use>
                </svg>
            </div>
        </div>
    </a>
    </li>   
    `;
  }
}

export default new resultsView();