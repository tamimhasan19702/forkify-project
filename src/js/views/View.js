import icons from '../../../img/icons.svg';
export default class View{
    _data;
    render(data){
    this._data = data;
    const markUp = this._generateMarkup();
    this._clear()
    this._parentElement.insertAdjacentHTML('afterbegin',markUp); 
    }

    _clear(){
        this._parentElement.innerHTML = '';
    }

    renderSpinner = () => {
        const markUp = `
        <div class="spinner">
          <svg>
              <use href="${icons}#icon-loader"></use>
          </svg>
         </div>
        `
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin',markUp);
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