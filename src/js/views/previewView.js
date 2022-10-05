import View from "./View";
import icons from '../../../img/icons.svg'

class previewView extends View{
  _parentElement = '';


  _generateMarkup(){
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
    <a href="#${this._data.id}" class="preview-link ${this._data.id === id ? 'preview-link-active' : ''}">
        <figure class="preview-fig">
            <img src="${this._data.image}" alt="${this._data.title}">
        </figure>
        <div class="preview-data">
            <h4 class="preview-title">${this._data.title} </h4>
            <p class="preview-publisher">${this._data.publisher}</p>
        </div>
    </a>
    </li>   
    `;
  }
}

export default new previewView();