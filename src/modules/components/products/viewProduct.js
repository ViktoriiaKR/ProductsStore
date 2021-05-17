import './style.scss';

export default class ViewProducts {
    constructor(onClickRouteToDescription, onClickSaveToBasket){
        this.products = document.getElementById('products-wrapper');
        this.onClickRouteToDescription = onClickRouteToDescription;
        this.onClickSaveToBasket = onClickSaveToBasket;
    };

    renderListsProd(data){
        const listsProducts = data.map(function (item) {
            return `<div class="product-card" data-id="${item.id}">
                        <div class="wrap-img">
                            <img src=${item.image} />
                            <div class="card-description" data-id="${item.id}"></div>
                        </div>
                        <div class="card-info">
                            <a href="#" title=${item.title} class="itemTitle">${item.title}</a>
                            <p class="itemPrice">${item.price} <span>грн.</span></p>
                        
                                <button data-id="${item.id}" class="add-to-basket" >В корзину</button>
                          
                        </div>
                    </div>`
        });

        this.products.innerHTML += listsProducts.join('');
        this.addListeners();
    };

    addListeners(){
        [...document.querySelectorAll('.card-description')]
            .forEach(btn => btn.addEventListener('click', this.onClickRouteToDescription));
        [...document.querySelectorAll('.add-to-basket')]
            .forEach(btn => btn.addEventListener('click', this.onClickSaveToBasket));
    }
};