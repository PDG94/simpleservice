import React from "react";
import "../PaginationAdmin/paginationAdmin.css";
import { useDispatch, useSelector } from "react-redux";
import { resedPaged } from "../../../redux/actions/miscActions";

export default function PaginationAdmin({ servicesPerPage, allUsers, paged }) {
  const pageNumber = [];
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.misc.currentPage);

  for (let i = 0; i < Math.ceil(allUsers / servicesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  function handlePrev() {
    if (currentPage === 1) {
      dispatch(resedPaged(1));
    } else {
      dispatch(resedPaged(currentPage - 1));
    }
  }

  function handleNext() {
    if (currentPage === pageNumber[pageNumber.length - 1]) {
      dispatch(resedPaged(currentPage));
    } else {
      dispatch(resedPaged(currentPage + 1));
    }
  }

  return (
    <nav className="paginateContainer">
      <div className="pages">
        <div>
          <p
            className="buttonPage"
            onClick={() => handlePrev()}
            disabled={allUsers < 6}
          >
            ⪻
          </p>
        </div>
        {allUsers < 6 ? (
          <div key="pagination">{paged(1)}</div>
        ) : (
          pageNumber &&
          pageNumber.map((n) => (
            <div key={n} className="page">
              <p
                className={"page-number" + (n === currentPage ? "active" : "")}
                key={n}
                onClick={() => paged(n)}
              >
                {n}
              </p>
            </div>
          ))
        )}
        <div>
          <p
            className="buttonPage"
            onClick={() => handleNext()}
            disabled={allUsers < 6}
          >
            ⪼
          </p>
        </div>
      </div>
    </nav>
  );
}
