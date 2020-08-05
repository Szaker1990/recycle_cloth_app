import React from "react";

export const PaginationButtons = ({postsPerPage, totalPosts, paginate, currPage}) => {
    const pageNumbers = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    if(pageNumbers.length <=1 ) {
        return null
    }
    return (
        <>
            <ul className="pagination__wrapper">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination__item">
                        <button onClick={() => paginate(number)} className={(currPage === number? 'active'
                            :"pagination__link")}>{number}</button>
                    </li>
                ))}
            </ul>
        </>
    )
}