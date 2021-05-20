import './style.scss';

export default class ViewCategory {
    constructor(){
        this.categories = document.getElementById('category-list');
    };

    renderListsCategory(data){
        const listsCategory = data.map(function (item) {
            return `<option data-value="${item.CATEGORY}" value="${item.CATEGORY}">${item.CATEGORY}</option>`
        });

        this.categories.innerHTML += listsCategory.join('');
    };
};