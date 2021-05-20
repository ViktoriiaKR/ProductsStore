export default class ModelProducts {
    #allProducts = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    #data = [];
    #defaultData = [];

    loadProducts(){
        return fetch(this.#allProducts)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                let results = [];
                let title = [];
                let entries = data.feed.entry;
                let col = 8;
                let k = 0;
                for (let i = 0; i <= col; i++) {
                    title.push(entries[i].content.$t);
                };
                for (let i = col + 1; i < entries.length; ) {
                    results[k] = {};
                    for (let j = 0; j <= col; j++) {
                        results[k][title[j]] = entries[i].content.$t;
                        i++;
                    };
                    k++;
                };
                this.#data = results;
                this.#defaultData = results;
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
        return this.copy(this.#data.find(item => item.ID === find_id));
    };

    getDataByCategoties(categ) {
        let res;
        if (categ !== "DEFAULT") {
            res = this.#data.filter(function (el) {
                return el.CATEGORY === categ
            })
        } else {
            res = this.#defaultData
        }
        return res;  
    };

    getDataByPrice(indicator) {
        let res;
        console.log(indicator, 'indicator')
        // switch (indicator) {
        //     case 'asc':
        //         res = this.#data.sort((a, b) => parseFloat(a.PRICE) - parseFloat(b.PRICE));
        //         break;
        //     case 'descr':
        //         res = this.#data.sort((a, b) => parseFloat(b.PRICE) - parseFloat(a.PRICE));
        //         break;
        //     case '':
        //         res = this.#data
        // }
        if (indicator == 'asc') {
            res = this.#data.sort((a, b) => parseFloat(a.PRICE) - parseFloat(b.PRICE));
        } else if (indicator == 'desc') {
            res = this.#data.sort((a, b) => parseFloat(b.PRICE) - parseFloat(a.PRICE));
        } else if (indicator == 'DEFAULT') {
            res = this.#data;
        }
        return res;
    };

    getDataSearch = (value) => {
        let reg = new RegExp(`${value}`,'i');
        let result;
        if (value !== '') {
            result = this.#data.filter(function (el) {
			    return reg.test(el.PRODUCT_NAME) || reg.test(el.MANUFACTURE);
		    });  
        } else {
            result = this.#defaultData;
        }
        return result;
    };

    copy(d){
        return JSON.parse(JSON.stringify(d));
    };
};