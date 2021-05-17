export default class ModelProducts {
    #allProducts = 'https://fakestoreapi.com/products';
    #data = [];

    loadProducts(){
        return fetch(this.#allProducts)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                this.#data = data;
                return this.data;
            })
            .catch(error => {
                console.log(error, 'Error')
            });
    };

    get data(){
        return this.copy(this.#data);
    };

    getDataById = (find_id) => {
        return this.copy(this.#data.find(item => item.id == find_id));
    }

    copy(d){
        return JSON.parse(JSON.stringify(d));
    };

};