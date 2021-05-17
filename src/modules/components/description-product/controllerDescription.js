import ModelDescription from './modelDescription.js';
import ViewDescription from "./viewDescription.js";

export default class ControllerDescr {
    constructor(publisher){
        this.modelDescr = new ModelDescription();
        this.viewDescr = new ViewDescription();
        
        this.publisher = publisher;
        this.publisher.subscribe('ADD_ID_DESCR', this.loadDescription)
        
    };

    loadDescription = (id) => {
        this.modelDescr.loadDescrProduct(id)
            .then(descr => this.viewDescr.renderDescription(descr));
        
    };  
}; 