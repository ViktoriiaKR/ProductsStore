import ModelProducts from './../products/modelProduct.js';
import ViewCategory from './viewCategory.js';

export default class ControllerCategory {
    constructor(){
        this.modelProductCateg = new ModelProducts();
        this.viewCategory = new ViewCategory();

        this.loadCategory();
    };
    
    loadCategory = () => {
        this.modelProductCateg.loadProducts()
            .then(d => this.viewCategory.renderListsCategory(d));
    };
}; 