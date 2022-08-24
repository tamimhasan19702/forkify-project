class SearchView{
  #parentEl = document.querySelector('.search');

  getQuery(){
    return this.#parentEl.querySelector('.search-field').value;
    
  }

  clearInp

  addHandlerSearch(handler){
   this.#parentEl.addEventListener('submit',function(e){
    e.preventDefault();
    handler();
   })
  }
}

export default new SearchView();