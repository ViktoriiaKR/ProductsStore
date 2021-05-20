import ModelDescription from './modelDescription.js';
import ViewDescription from "./viewDescription.js";

export default class ControllerDescr {
    constructor(publisher){
        this.modelDescr = new ModelDescription();
        this.viewDescr = new ViewDescription();
        
        this.publisher = publisher;
        this.publisher.subscribe('SHOW_DESRCIPTION', this.loadDescription);
    };

    loadDescription = (descr) => {
        this.viewDescr.renderDescription(descr);
    };
}; 