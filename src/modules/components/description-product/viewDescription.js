import './style.scss';

export default class ViewDescription {
    constructor(){
       this.wrapperDescr = document.querySelector(".modal");
       this.modal = document.getElementById("myModal");
    };

    handleOpenModal = () => {
        this.modal.style.display = "block";
    };

    handleCloseModal = () => {
        this.modal.style.display = "none";
    };

    handleOutsideModal = (event) => {
        if (event.target == this.modal) {
            this.modal.style.display = "none";
        };
    };

    renderDescription(descr) {
        const description = `
            <div class="modal-content">
                <div class="product-info">
                    <span class="close">&times;</span>
                    <div class="info-img-wrap">
                        <img src=${descr.IMG_LINK} />
                    </div>
                    <div class="info-text-wrap">
                        <a href="#" title=${descr.PRODUCT_NAME} class="itemTitle">${descr.PRODUCT_NAME}</a>
                        <p> category: ${descr.CATEGORY}</p>
                        <p>units: ${descr.UNITS}</p>
                        <p>ingredients: ${descr.INGRIDIENTS}</p>
                        <p>manufacturer: ${descr.MANUFACTURE}</p>
                        <p>${descr.AMOUNT} <span>pc.</span></p>
                        <p class="itemPrice">${descr.PRICE} <span>UAH</span></p>
                    </div>             
                </div>
            </div>`

        this.wrapperDescr.innerHTML = description;
        this.addListeners();
    }

    addListeners(){
        [...document.querySelectorAll('.card-description')]
            .forEach(btn => btn.addEventListener('click', this.handleOpenModal));
        [...document.querySelectorAll('.close')]
            .forEach(btn => btn.addEventListener('click', this.handleCloseModal));
        window.addEventListener('click', this.handleOutsideModal);
    }
};   
