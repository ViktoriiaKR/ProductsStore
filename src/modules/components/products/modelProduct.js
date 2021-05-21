export default class ModelProducts {
    #allProducts = 'https://spreadsheets.google.com/feeds/cells/1PXorfz2O2NqH-FcW0nA-HhmtZMmSSwgHheifWc0e1tU/1/public/full?alt=json';
    #data = [];
    #dataDefault = [];

    loadProducts(){
        return fetch(this.#allProducts)
            .then(res => res.ok ? res.json() : Promise.reject(res))
            .then(data => {
                let results = [];
                let title = [];
                let entries = data.feed.entry;
                let allColTable = 8;
                let x = 0;
                let i = 0;
                while (i <= allColTable) { 
                    title.push(entries[i].content.$t);
                    i++;
                };
                for (let i = allColTable + 1; i < entries.length;) {
                    results[x] = {};
                    let y = 0;
                    while (y <= allColTable) {
                        results[x][title[y]] = entries[i].content.$t;
                        y++;
                        i++;
                    };
                    x++;
                };
                this.#data = results;
                this.#dataDefault = this.#dataDefault.concat(results);
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
            res = this.#dataDefault
        };
        return res;  
    };

    getDataByPrice(indicator) {
        let res;
        if (indicator == 'DEFAULT') {
            res = this.#dataDefault;
        } else if (indicator == 'asc') {
            res = this.#data.sort((a, b) => parseFloat(a.PRICE) - parseFloat(b.PRICE));
        } else if (indicator == 'desc') {
            res = this.#data.sort((a, b) => parseFloat(b.PRICE) - parseFloat(a.PRICE));
        };
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
            result = this.#dataDefault;
        };
        return result;
    };

    copy(d){
        return JSON.parse(JSON.stringify(d));
    };
};