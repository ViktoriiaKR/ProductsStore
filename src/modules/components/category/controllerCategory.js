import ViewCategory from './viewCategory.js';

export default class ControllerCategory {
    constructor(publisher){
        this.view = new ViewCategory(this.choiceCategory);

        this.publisher = publisher;
        publisher.subscribe("PRODUCTS_LIST", this.loadCategory);
    };
    
    loadCategory = (data) => {
        let getCategories = data.filter((set => f => !set.has(f.CATEGORY) && set.add(f.CATEGORY))(new Set))
        this.view.renderListsCategory(getCategories)
    };
}; 