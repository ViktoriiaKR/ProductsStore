export default class ViewSearch {
    constructor(handleClickSearch){
        this.products = document.getElementById('products-wrapper');
        document.getElementById('btn-search').addEventListener('click', () => handleClickSearch(document.getElementById("searching").value));

    };

    renderSearch(data){
        console.log(data)

    };
};