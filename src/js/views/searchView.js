class SearchView {
    _parentEl = document.querySelector('.search');

    getQuery () {
       const query = this._parentEl.querySelector('.search-field').value;
        this._clearInput();
        return query;
    }

    addHandlerSearch(handler){
      this._parentEl.addEventListener('submit', (e) => {
        e.preventDefault();
        handler();
      })  
    }

    _clearInput(){
        this._parentEl.querySelector('.search-field').value = '';
    }
}

export default new SearchView();