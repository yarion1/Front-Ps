import React from "react";
import { Paginacao, Button, Side } from "./stylePagination";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const MAX_ITEMS = 3;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const Pagination = ({ limit, total, offset, setOffset }) => {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page) {
    setOffset((page - 1) * limit);
  }
  return (
    <div className="pages">
      <Paginacao>
        <li>
          <Side
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
          >
            <GrFormPrevious />
          </Side>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) => (
            <li key={page}>
              <Button
                onClick={() => onPageChange(page)}
                className={page === current ? "selected" : null}
              >
                {page}
              </Button>
            </li>
          ))}

        <li>
          <Side
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
          >
            <MdNavigateNext />
          </Side>
        </li>
      </Paginacao>
    </div>
  );
};

export default Pagination;
