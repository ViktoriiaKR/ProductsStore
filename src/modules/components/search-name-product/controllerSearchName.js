import ModelProducts from './../products/modelProduct.js';
import ViewSearch from './viewSearch.js';

export default class ControllerSearchName {
    constructor(){
        this.modelSearch = new ModelProducts();
        this.viewSearch = new ViewSearch(this.handleClickSearch);

    };
    
    handleClickSearch = (data) => {
        this.modelSearch.searchProducts(data)
            .then(d => this.viewSearch.renderSearch(d));
    };
}; 