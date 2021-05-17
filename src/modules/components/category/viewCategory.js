import './style.scss';

export default class ViewCategory {
    constructor(){
        this.categories = document.getElementById('category-list');
    };

    renderListsCategory(data){
        const filterUniqueCategoies = data.filter((set => f => !set.has(f.category) && set.add(f.category))(new Set));

        const listsCategory = filterUniqueCategoies.map(function (item) {
            return `<li><input type="checkbox" />${item.category}</li>`
            
            
        });

        this.categories.innerHTML += listsCategory.join('');
    };
};