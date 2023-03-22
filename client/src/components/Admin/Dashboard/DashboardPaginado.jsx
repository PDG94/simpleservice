import { useDispatch, useSelector } from "react-redux";
import { resedPaged } from "../../../redux/actions/miscActions";
import "../PaginationAdmin/paginationAdmin.css";
import "../Dashboard/dashboardPaginado.css";

export default function DashboardPaginado({ paged, orders, servicesPerPage }) {
  const currentPage = useSelector((state) => state.misc.currentPage); // 1

  const dispatch = useDispatch();

  //Limit the page numbers shown

  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(orders / servicesPerPage); i++) {
    pageNumber.push(i);
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
    <nav className="paginateContainer3">
      <div className="pages3">
        <div>
          <p
            className="buttonPage3"
            onClick={() => handlePrev()}
            disabled={orders < 6}
          >
            ⪻
          </p>
        </div>
        {orders < 6 ? (
          <div key="pagination">{paged(1)}</div>
        ) : (
          pageNumber &&
          pageNumber.map((n) => (
            <div key={n} className="page3">
              <p
                className={"page-number3" + (n === currentPage ? "active" : "")}
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
            className="buttonPage3"
            onClick={() => handleNext()}
            disabled={orders < 6}
          >
            ⪼
          </p>
        </div>
      </div>
    </nav>
  );
}
