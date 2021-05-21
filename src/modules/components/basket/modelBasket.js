export default class ModelBasket {

    newOrderProcesIncr = (data) => {
        data.COUNT = Number(data.COUNT) + 1;
        data.COUNT = String(data.COUNT);
        return data;
    };

    newOrderProcesDescr = (data) => {
        if (data.COUNT > 1) {
            data.COUNT = Number(data.COUNT) - 1;
            data.COUNT = String(data.COUNT);
        };
        return data;
    };

    removeItemBasket = (data, id) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].ID === id) {
                data.splice(i, 1);
                break;
            };
        };
        return data;
    };

    registrationOrder = (data) => {
        let getLS = JSON.parse(localStorage.getItem('orders') || "[]");
        let toSetLS = getLS.concat(data);
        localStorage.setItem('orders', JSON.stringify(toSetLS)); 
        alert('Your order has been successfully completed !')
    };
};