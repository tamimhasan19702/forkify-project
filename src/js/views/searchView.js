class SearchView {
    _parentEl = document.querySelector('.search');

    getQuery () {
        this._parentEl.querySelector('.search-field').value;
    }

    addHandlerSearch(handler){
      this._parentEl.addEventListener('submit', (e) => {
        e.preventDefault();
        handler();
      })  
    }
}

export default new SearchView();