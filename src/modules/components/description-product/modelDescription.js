export default class ModelDescription {
    #product = 'https://fakestoreapi.com/products';

    loadDescrProduct = (id) => {
        return fetch(`${this.#product}/${id}`)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                return data;
            })
            .catch(error => {
                console.log(error, 'Error')
            });
    };
};