import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Pagination = ({currentPage, postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page__item" key={number}>
                            <Link to={number} className={currentPage === number ? "page__current page__link" : "page__link"}  onClick={() => paginate(number)}>
                                {number}
                            </Link>
                        </li>
                    ))
                }

            </ul>
        </div>
    )
};

export default Pagination;