import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];

    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li className="page-item" key={number}>
                            <Link to={number} className="page-link" onClick={() => paginate(number)}>
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