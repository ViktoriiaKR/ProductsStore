import ModelBasket from './modelBasket.js';
import ViewBasket from './viewBasket.js';

export default class ControllerBasket {
    #obj = {};
    #arr = [];
    constructor(publisher){
        this.model= new ModelBasket();
        this.view = new ViewBasket(
            this.handleIncrease,
            this.handleDecrease,
            this.handleRemoveItem,
            this.handleCheckoutOrder,
            this.handleHistoryOrders,
        );

        this.publisher = publisher;
        this.publisher.subscribe('ADD_TO_BASKET', this.handleAddOrdersToBasket);
    };

    handleAddOrdersToBasket = data => {
        this.#obj = data;
        this.#arr.push(data);
        this.view.renderContentBasket(this.#arr);
    };
    
    handleIncrease = (event) => {
        let id = event.target.dataset.id;
        let objForIncr = this.#arr.find(item => item.ID === id);
        this.model.newOrderProcesIncr(objForIncr);
        this.view.renderContentBasket(this.#arr);
    };

    handleDecrease = (event) => {
        let id = event.target.dataset.id;
        let objForDecr = this.#arr.find(item => item.ID === id);
        this.model.newOrderProcesDescr(objForDecr);
        this.view.renderContentBasket(this.#arr);
    };

    handleRemoveItem = (event) => {
        let id = event.target.dataset.id;
        this.#arr = this.model.removeItemBasket(this.#arr, id);
        if (this.#arr.length <= 0) {
            document.querySelector('.person-info-wrapper').style.display = "none";
        };
        this.view.renderContentBasket(this.#arr);
    };

    handleCheckoutOrder = (event) => {
        let formValue = this.view.handleGetFormData();
        for (var i = 0; i < this.#arr.length; i++) {
            this.#arr[i].BAYER_NAME = formValue.bayerName;
            this.#arr[i].BAYER_EMAIL = formValue.bayerEmail;
            this.#arr[i].BAYER_TEL = formValue.bayerTel;
          }
        this.model.registrationOrder(this.#arr);
        event.preventDefault();
    };

    handleHistoryOrders = () => {
        let info = JSON.parse(localStorage.getItem('orders'));
        this.view.renderHistory(info);
    };
}; 