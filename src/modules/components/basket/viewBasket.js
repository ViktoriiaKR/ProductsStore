import './style.scss';

export default class ViewBasket {
    constructor(
        handleIncrease,
        handleDecrease,
        handleRemoveItem,
        handleCheckoutOrder,
        handleHistoryOrders,
    ) {
        this.dom = document.querySelector('.modal-content-descr');
        this.modalBasket = document.querySelector('.basket-wrapper');
        this.priceWrapper = document.querySelector('.amount-price-wrapper');
        this.domHistoryWrapper = document.querySelector('.history-wrapper');
        this.handleIncrease = handleIncrease;
        this.handleDecrease = handleDecrease;
        this.handleRemoveItem = handleRemoveItem;
        this.handleCheckoutOrder = handleCheckoutOrder;
        this.handleHistoryOrders = handleHistoryOrders;
    };

    handleOpenBasket = () => {
        this.modalBasket.style.display = "block";
    };

    handleCloseBasket = () => {
        this.modalBasket.style.display = "none";
    };

    handleGetFormData = () => {
        let bayerName = document.querySelector('.input-name').value;
        let bayerEmail = document.querySelector('.input-email').value;
        let bayerTel = document.querySelector('.input-tel').value;
        return { bayerName, bayerEmail, bayerTel }
    }

    renderContentBasket(data) {
        let total = data.reduce((sum,item) => sum + (+item.PRICE) * (+item.COUNT), 0);

        const listsBaskets = data.map(function(item) {
            return `<tr>
                        <td><img src=${item.IMG_LINK} />
                            <span>${item.PRODUCT_NAME}</span>
                        </td>
                        <td>
                            <div class="counter">
                                <button data-id="${item.ID}" class="decrease" value="Decrease Value">-</button>
                                <input type="number" readonly id="number" value=${item.COUNT} />
                                <button data-id="${item.ID}" class="increase" value="Increase Value">+</button>
                            </div>
                        </td>
                        <td>${item.PRICE}<span> UAH</span></td>
                        <td class="remove-order" data-id="${item.ID}">x</td>
                    </tr>`
        });

        const totalPrice = `<table class="table-amount-price">
                <tr>
                    <td colspan="2">Order price</td>
                </tr>
                <tr>
                    <td>Basket amount</td>
                    <td>${total} UAH</td>
                </tr>
                <tr>
                    <td>Итого: </td>
                    <td>${total} UAH</td>
                </tr>
            </table>`
        
        this.dom.innerHTML = listsBaskets.join('');
        this.priceWrapper.innerHTML = totalPrice;
        this.addListeners();
    };

    renderHistory(data) {
        console.log(data,'kkkk')
        const historyInfo = data.map(function(item) {
            return `<table>
                        <tr>
                            <th>Order name</th>
                            <th>Order quantity</th>
                            <th>Order price</th>
                            <th>Customer information</th>
                        </tr>
                        <tr>
                            <td>${item.PRODUCT_NAME}</td>
                            <td>${item.COUNT}</td>
                            <td>${item.PRICE}</td>
                            <td>${item.BAYER_NAME}, ${item.BAYER_EMAIL}, ${item.BAYER_TEL}</td>
                        </tr>
                    </table>`
        })
        this.domHistoryWrapper = historyInfo.join('');
    };

    addListeners(){
        [...document.querySelectorAll('.basket-img')]
            .forEach(el => el.addEventListener('click', this.handleOpenBasket));

        [...document.querySelectorAll('.close-basket')]
            .forEach(btn => btn.addEventListener('click', this.handleCloseBasket));

        [...document.querySelectorAll('.remove-order')]
            .forEach(btn => btn.addEventListener('click', this.handleRemoveItem));

        [...document.querySelectorAll('.decrease')]
            .forEach(btn => btn.addEventListener('click', this.handleDecrease));

        [...document.querySelectorAll('.increase')]
            .forEach(btn => btn.addEventListener('click', this.handleIncrease));
        
        document.querySelector('.history-of-orders').addEventListener('click', this.handleHistoryOrders);

        document.querySelector('.checkout').addEventListener('click', this.handleGetFormData)

        window.addEventListener('click', this.handleOutsideModal);

        document.querySelector('.person-info').addEventListener('submit', this.handleCheckoutOrder);
    }
};