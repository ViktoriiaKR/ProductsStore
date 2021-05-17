export default class ModelBasket {
    #buy = [];
    
    loadFromLS() {
        this.#buy = JSON.parse(localStorage.getItem('purchases') || "[]");
        return this.buy;
    };

    get buy() {
        return JSON.parse(JSON.stringify(this.#buy))
    }

    addNewPurchase = (data) => {
        if (!this.#buy.find(({id}) => id == data.id)) {
            this.#buy.push(data);
        }
        this.writeToLS();
        return this.buy
    }

    writeToLS() {
        localStorage.setItem('purchases', JSON.stringify(this.#buy));
    }
    
};