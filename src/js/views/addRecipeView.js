import View from "./View";
import icons from '../../../img/icons.svg'

class addRecipeView extends View{
    _parentElement = document.querySelector('.upload');
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav-btn-add-recipe');
    _btnClose = document.querySelector('.btn-close-model');

     constructor(){
        super();
        this._addHandlerShowWindow();
     }

     _toggleWindow(){
        this._overlay.classList.toggle('hidden');
        this._window.classList.toggle('hidden');
     }

    _addHandlerShowWindow(){
        this._btnOpen.addEventListener('click', this._toggleWindow.bind(this));
    }

    _generateMarkup(){

    }
}

export default new addRecipeView();