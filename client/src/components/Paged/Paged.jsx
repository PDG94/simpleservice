import React from "react";
import "../Paged/paged.css";

export default function Paged({
  servicesPerPage,
  allServices,
  paged,
  currentPage,
  setCurrentPage,
}) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(allServices / servicesPerPage); i++) {
    pageNumber.push(i + 1);
  }

  function handlePrev() {
    if (currentPage === 1) {
      setCurrentPage(1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage === pageNumber[pageNumber.length - 1]) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
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
