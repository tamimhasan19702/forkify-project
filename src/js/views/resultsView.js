import View from "./View";

class resultsView extends View{
  _parentElement = document.querySelector('.results');

  _generateMarkup(){
    console.log(this._data);
    return this._data.map(this._generateMarkupPreview).join()
  }

  _generateMarkupPreview(){
    return `
    <li class="preview">
    <a href="#23456" class="preview-link preview-link-active">
        <figure class="preview-fig">
            <img src="./img/test-1.jpg" alt="Test">
        </figure>
        <div class="preview-data">
            <h4 class="preview-title">Pasta with Tomato Cream ... </h4>
            <p class="preview-publisher">The Pioneer Woman </p>
            <div class="preview-user-generated">
                <svg>
                <use href="./img/icons.svg#icon-user"></use>
                </svg>
            </div>
        </div>
    </a>
    </li>   
    `;
  }
}

export default new resultsView();