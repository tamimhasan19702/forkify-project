import View from "./View";
import icons from '../../../img/icons.svg'

class addRecipeView extends View{
    _parentElement = document.querySelector('.upload');
    _window = document.querySelector('.add-recipe-window');
    _overlay = document.querySelector('.overlay');
    _btnOpen = document.querySelector('.nav-btn-add-recipe');
    _btnClose = document.querySelector('.btn-close-model');

    _generateMarkup(){

    }
}

export default new addRecipeView();