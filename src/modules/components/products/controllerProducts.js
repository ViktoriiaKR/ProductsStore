import ModelProducts from './modelProduct.js';
import ViewProducts from './viewProduct.js';

export default class ControllerProd {
    constructor(publisher){
        this.modelProduct = new ModelProducts();
        this.viewProduct = new ViewProducts(this.onClickRouteToDescription, this.onClickSaveToBasket);

        this.loading();
        this.publisher = publisher;
    };
    
    loading = () => {
        if (window.location.pathname == ("/" || "/index.html" || "index")) {
           this.modelProduct.loadProducts()
            .then(d => this.viewProduct.renderListsProd(d)); 
        } else {
            console.log("на эту страницу товары не грузим");
        };
    };

    onClickRouteToDescription = event => {
        const id = event.target.dataset.id;
        this.publisher.notify('ADD_ID_DESCR', id);
        
    };

    onClickSaveToBasket = event => {
        const id = event.target.dataset.id;
        const item = this.modelProduct.getDataById(id);
        this.publisher.notify('ADD_TO_BASKET', item);
    };
    
}; 