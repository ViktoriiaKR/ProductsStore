import './style/index.scss';
import ControllerProd from "./modules/components/products/controllerProducts.js";
import ControllerCategory from "./modules/components/category/controllerCategory.js";
import ControllerBasket from "./modules/components/basket/controllerBasket.js";
import ControllerDescr from "./modules/components/description-product/controllerDescription.js"
import Publisher from "./helpers/publisher.js";

const publisher = new Publisher();
const loadProduct = new ControllerProd(publisher);
const category = new ControllerCategory(publisher);
const basket = new ControllerBasket(publisher);
const descr = new ControllerDescr(publisher);
