import View from "./View";
import icons from '../../../img/icons.svg'

class paginationView extends View{
    _parentElement = document.querySelector('.pagination');

    _generateMarkup(){
        const curPage = this._data.page
         const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage)
         console.log(numPages)

        //page 1 and there are other pages available 
        if(curPage === 1 && numPages > 1){
            return 'page 1,others'
        }

        //page 1 but there are no pages available
        if(curPage === numPages && numPages > 1){
        return `
        <button class="btn-inline pagination-btn-prev">
        <svg class="search-icon">
        <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
        </button>
        `
        } 
        
        //last page
        if(curPage < numPages){

        }

        //other page

    }
}

export default new paginationView();