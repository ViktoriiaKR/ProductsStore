export default class ViewBasket {
    constructor(){
        this.dom = document.querySelector('.table-basket');
    };

    renderContentBasket(data){
        const listsBaskets = data.map(function (item) {
            return `<tr>
                        <td><img src=${item.image} />
                            <span>${item.title}</span>
                        </td>
                        <td>
                            <div class="counter">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </td>
                        <td>${item.price}<span> грн.</span></td>
                        <td class="remove-order" data-id="${item.id}">x</td>
                    </tr>`
        });
        this.dom.innerHTML += listsBaskets.join('');
    };
};
