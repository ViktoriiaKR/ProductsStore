import style from './style.scss';

export default class PaginationView {
    constructor(){
        this.pagination = document.querySelector('.pagination-wrapper');
    };

    // const pageNumbers = [];

    // for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    //     pageNumbers.push(i);
    // };

    renderPagination(){
    


        const listsProducts = `
            <nav>
                <ul className={style.pagination}>
                    {pageNumbers.map(number => (
                        <li key={number} className={style.pageItem}>
                            <a href='#' onClick={() => props.paginate(number)} className={style.pageref}>
                                {number}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>`

        this.products.innerHTML = listsProducts;
    };
};

const PaginationOwn = (props) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav>
            <ul className={style.pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={style.pageItem}>
                        <a href='#' onClick={() => props.paginate(number)} className={style.pageref}>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationOwn;