import View from "./View";
import icons from '../../../img/icons.svg'
import previewView from "./previewView";

class bookmarksView extends View{
  _parentElement = document.querySelector('.bookmarks-list');
  _errorMessage =  `No bookmark yet. Find a nice recipe and bookmark it 😃 `
  _Message =  ``;


  addHandlerRender(handler){
  window.addEventListener('load',handler);
  }

  _generateMarkup(){
    return this._data.map(bookmark => previewView.render(bookmark, false)).join()
  }
}

export default new bookmarksView();