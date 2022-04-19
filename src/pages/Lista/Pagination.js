import React from "react";
import './style.css';

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1)/2

const Pagination = ({itensPerPage, currentPage, pages, setCurrentPage}) => {
const current = currentPage? (currentPage/itensPerPage) +1 : 1


  const first = Math.max(current - MAX_LEFT, 1)

  function onPageChange(page){
    setCurrentPage(Number(page - 1)* itensPerPage)
  }

    return(
        <div className="pages">
          <ul className="pagination">

            <li>
              <button onClick={() => onPageChange(current - 1)}
              disabled={current === 1}>
              Anterior</button>
            </li>

            {Array.from({length: Math.min(MAX_ITEMS, pages)})
            .map((_, index)=> index + first)
            .map((page) => (
              <li key = {page}>
                <button 
                  onClick={(e) => onPageChange(page)}
                  className={page === current ? 'pagination__item--active': null}>              
                    {page}
                </button>
              </li>
            ))}

            <li>
              <button onClick={() => onPageChange(current + 1)}
              disabled={current === pages}>
              Proximo</button>
            </li>
          </ul> 
 
        </div>
    )

}

export default Pagination