import './style.scss';

export default class ViewDescription {
    constructor(){
       this.wrapperDescr = document.querySelector(".modal");
    };

    // render(){
    //     this.addListeners();
    //     this.handleOpenModal();
    //     this.handleCloseModal();
    // }

    // handleOpenModal = () => {
    //     document.getElementById("myModal").style.display = "block";
    //     console.log('modal.style.display = "block"')
    // }

    // handleCloseModal = () => {
    //     document.getElementById("myModal").style.display = "none";
    // }

    renderDescription(descr) {
        const description = `
        <div class="modal-content">
            <div class="product-info">
                <span class="close">&times;</span>
                <div class="info-img-wrap">
                    <img src=${descr.image} />
                </div>
                <div class="info-text-wrap">
                    <a href="#" title=${descr.title} class="itemTitle">${descr.title}</a>
                    <p>${descr.description}</p>
                    <p class="itemPrice">${descr.price} <span>грн.</span></p>
                    <button id="addToBasket" class="add-to-basket" data-id="${descr.id}">В корзину</button>
                </div>             
            </div>
        </div>`

        this.wrapperDescr.innerHTML += description;
        // this.addListeners();
    }

    // addListeners(){
    //     [...document.querySelectorAll('.card-description')].forEach(el => el.addEventListener('click', this.handleOpenModal));
    //     document.getElementsByClassName("close")[0].addEventListener('click', this.handleCloseModal);
    // }
};   
