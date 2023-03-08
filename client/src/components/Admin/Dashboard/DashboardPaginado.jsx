import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resedPaged } from "../../../redux/actions/miscActions";
import "../PaginationAdmin/paginationAdmin.css";

export default function DashboardPaginado({ paged, orders, servicesPerPage }) {
  const currentPage = useSelector((state) => state.misc.currentPage); // 1
  const pageNumbers = orders / servicesPerPage;
  console.log(orders);
  const dispatch = useDispatch();

  //Limit the page numbers shown

  const [maxPageNumberLimit] = useState(5);
  const [minPageNumberLimit] = useState(0);

  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(orders / servicesPerPage); i++) {
    pageNumber.push(i);
  }

  function prev() {
    if (currentPage === 1) {
      dispatch(resedPaged(1));
    } else {
      dispatch(resedPaged(currentPage - 1));
    }
  }

  function nextPage() {
    if (currentPage === pageNumber[pageNumber.length - 1]) {
      dispatch(resedPaged(currentPage));
    } else {
      dispatch(resedPaged(currentPage + 1));
    }
  }

  return (
    <nav className="page">
      <div className="pagesAd">
        <div
          onClick={prev}
          className={currentPage === pageNumber[0] ? `hidden` : null}
        >
          &laquo;
        </div>

        {pageNumber.map((number) => {
          if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
              <div
                key={number}
                onClick={() => paged(number)}
                className={currentPage === number ? "active" : ""}
              >
                {number}
              </div>
            );
          } else {
            return null; // agregar una instrucción `return` con un valor predeterminado
          }
        })}

        <li
          onClick={nextPage}
          className={
            currentPage === pageNumber[pageNumber.length - 1] ? "hidden" : ""
          }
        >
          &raquo;
        </li>
        <p className="pAdPage">
          <b className="Page">{`Page
            ${currentPage}`}</b>
          <span>{` of `}</span>
          <b>{`${Math.ceil(pageNumbers)}`}</b>
        </p>
      </div>
    </nav>
  );
}
