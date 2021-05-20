import ModelProducts from './modelProduct.js';
import ViewProducts from './viewProduct.js';

export default class ControllerProd {
    constructor(publisher){
        this.modelProduct = new ModelProducts();
        this.viewProduct = new ViewProducts(
            this.onClickRouteToDescription,
            this.onClickSaveToBasket,
            this.choiceCategory,
            this.handleClickSearch,
            this.choicePrice
        );

        this.loading();
        this.publisher = publisher;
    };
    
    loading = () => {
        this.modelProduct.loadProducts()
            .then(d => {
                this.viewProduct.renderListsProd(d),
                this.publisher.notify('PRODUCTS_LIST', d); 
            })
    };

    choiceCategory = (event) => {
        let selected = event.target.value;
        let newView = this.modelProduct.getDataByCategoties(selected);
        this.viewProduct.renderListsProd(newView)
    };

    choicePrice = (event) => {
        let selected = event.target.value;
        let sortByPrice = this.modelProduct.getDataByPrice(selected);

        this.viewProduct.renderListsProd(sortByPrice)
        console.log(sortByPrice)
    }
    
    onClickRouteToDescription = event => {
        const id = event.target.dataset.id;
        const item = this.modelProduct.getDataById(id);
        this.publisher.notify('SHOW_DESRCIPTION', item); 
    };

    onClickSaveToBasket = event => {
        const id = event.target.dataset.id;
        const item = this.modelProduct.getDataById(id);
        item.COUNT = "1";
        this.publisher.notify('ADD_TO_BASKET', item);
    };

    handleClickSearch = (value) => {
        const searched = this.modelProduct.getDataSearch(value);
        this.viewProduct.renderListsProd(searched)
    };
}; 