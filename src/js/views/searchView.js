class searchView{
 _parentELement = document.querySelector('.search');

 getQuery(){
   const query = this._parentELement.querySelector('.search-field').ariaValueMax;
   this._clearInput();
   return query; 
 }

 _clearInput(){
    this._parentELement.addEventListener('submit',function(e){
        e.preventDefault();
        handler();
    });
 }
 addHandlerSearch(handler){
    this._parentELement.addEventListener('submit',function(e){
        e.preventDefault();
        handler();
    });
 }
}

export default new searchView();