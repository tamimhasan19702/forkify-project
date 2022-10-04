import View from "./View";
import icons from '../../../img/icons.svg'
import previewView from "./previewView";

class bookmarksView extends View{
  _parentElement = document.querySelector('.bookmarks-list');
  _errorMessage =  `No bookmark yet. Find a nice recipe and bookmark it 😃 `
  _Message =  ``;


  _generateMarkup(){
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join()
  }
}

export default new bookmarksView();