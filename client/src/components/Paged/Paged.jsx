import React from "react";
import "../Paged/paged.css";
import { useDispatch, useSelector } from "react-redux";
import { resedPaged } from "../../redux/actions";

export default function Paged({ servicesPerPage, allServices, paged }) {
  const pageNumber = [];
  const dispatch = useDispatch();

  const currentPage = useSelector((state) => state.currentPage);

  for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
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
      <ul className="pages">
        <li>
          <p
            className="buttonPage"
            onClick={() => handlePrev()}
            disabled={allServices < 6}
          >
            ⪻
          </p>
        </li>
        {allServices < 6 ? (
          <li key="pagination">{paged(1)}</li>
        ) : (
          pageNumber &&
          pageNumber.map((n) => (
            <li key={n} className="page">
              <p
                className={"page-number" + (n === currentPage ? "active" : "")}
                key={n}
                onClick={() => paged(n)}
              >
                {n}
              </p>
            </li>
          ))
        )}
        <li>
          <p
            className="buttonPage"
            onClick={() => handleNext()}
            disabled={allServices < 6}
          >
            ⪼
          </p>
        </li>
      </ul>
    </nav>
  );
}
