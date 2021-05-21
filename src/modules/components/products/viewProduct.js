import './style.scss';

export default class ViewProducts {
    constructor(
        onClickRouteToDescription,
        onClickSaveToBasket,
        choiceCategory,
        handleClickSearch,
        choicePrice,
        onClickToPage
    ){
        this.products = document.getElementById('products-wrapper');
        this.inputSearch = document.getElementById("searching");
        this.list_element = document.getElementById('products-wrapper');
        this.pagination_element = document.getElementById('pagination');
        this.onClickRouteToDescription = onClickRouteToDescription;
        this.onClickSaveToBasket = onClickSaveToBasket;
        this.choiceCategory = choiceCategory;
        this.choicePrice = choicePrice;
        this.handleClickSearch = handleClickSearch;
        this.onClickToPage = onClickToPage
    };

    renderListsProd(data){
        const listsProducts = data.map(function (item) {
            return `<div class="product-card" data-id="${item.ID}">
                        <div class="wrap-img">
                            <img src=${item.IMG_LINK} />
                            <div class="card-description" data-id="${item.ID}"></div>
                        </div>
                        <div class="card-info">
                            <a href="#" title=${item.title} class="itemTitle">${item.PRODUCT_NAME}</a>
                            <p class="itemPrice">${item.PRICE} <span>UAH</span></p>
                            <p>${item.AMOUNT} pc.</p>
                            <button data-id="${item.ID}" class="add-to-basket">To shopping cart</button>
                        </div>
                    </div>`
  
        });
        this.products.innerHTML = listsProducts.join('');
        this.addListeners();
    };

    addListeners(){
        [...document.querySelectorAll('.card-description')]
            .forEach(btn => btn.addEventListener('click', this.onClickRouteToDescription));
        [...document.querySelectorAll('.add-to-basket')]
            .forEach(btn => btn.addEventListener('click', this.onClickSaveToBasket));
        [...document.querySelectorAll('.pag-route')]
            .forEach(btn => btn.addEventListener('click', this.onClickToPage));
        document.getElementById("category-list").addEventListener("change", this.choiceCategory);
        document.getElementById("sort-by-price").addEventListener("change", this.choicePrice);
        document.getElementById('btn-search').addEventListener('click', () => this.handleClickSearch(this.inputSearch.value));
    };
};