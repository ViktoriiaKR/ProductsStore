import ModelBasket from './modelBasket.js';
import ViewBasket from './viewBasket.js';

export default class ControllerBasket {
    constructor(publisher){
        this.model= new ModelBasket();
        this.view = new ViewBasket();

        this.loadBasket();
        this.publisher = publisher;
        this.publisher.subscribe('ADD_TO_BASKET', this.hanleAddOrdersToBasket);

        console.log('контроллер корзины')
    }

    loadBasket() {
        const buy = this.model.loadFromLS();
        this.view.renderContentBasket(buy);
            console.log(buy, 'buy')
    }

    hanleAddOrdersToBasket = data => {
        this.model.addNewPurchase(data)
        this.view.renderContentBasket(newPurchase);
    }
}; 