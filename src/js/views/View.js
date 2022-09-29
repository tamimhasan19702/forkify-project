import icons from '../../../img/icons.svg'
export default class View{
    
    _data;
    render(data){
    //error handling
    if(!data || (Array.isArray(data) && data.length === 0) ) return this.renderError();

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

      renderError(message = this._errorMessage){
        const markUp = `
        <div class="error">
         <div>
            <svg>
                <use href="${icons}#icon-alert-triangle">
                </use>
            </svg>
         </div>
        <p>${message}</p>
       </div>
        `
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markUp); 
      }
      renderSuccess(message = this._Message){
        const markUp = `
        <div class="message">
         <div>
            <svg>
                <use href="${icons}#icon-smile">
                </use>
            </svg>
         </div>
        <p>${message}</p>
       </div>
        `
      this._clear();
      this._parentElement.insertAdjacentHTML('afterbegin',markUp); 
      }

}