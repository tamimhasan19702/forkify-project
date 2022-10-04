import View from "./View";
import icons from '../../../img/icons.svg'
import previewView from "./previewView";

class resultsView extends View{
  _parentElement = document.querySelector('.results');
  _errorMessage =  `No recipes found according to your query. Please try again ;) `
  _Message =  ``

 _generateMarkup(){
    return this._data.map(result => previewView.render(result,false)).join()
    
  }
}

export default new resultsView();