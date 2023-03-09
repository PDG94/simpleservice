import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resedPaged } from "../../../redux/actions/miscActions";
import { storeOrders } from "../../../redux/actions/ordersActions";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import Loading from "../../Loading/Loading";
import DashboardPaginado from "../Dashboard/DashboardPaginado";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Orders/orders.css";
import { MdOutlineChecklist } from "react-icons/md";

export default function OrderHistory() {
  const orders = useSelector((state) => state.orders.orderHistory);
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentPage = useSelector((state) => state.misc.currentPage);
  const [servicesPerPage] = useState(5);
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = orders.slice(indexOfFirstService, indexOfLastService);

  const paged = (currentPage) => {
    dispatch(resedPaged(currentPage));
  };

  useEffect(() => {
    dispatch(storeOrders(data));
  }, [dispatch, data]);

  const handleClick = (id) => {
    navigate(`/admin/order-details/${id}`);
  };

  return (
    <section className="fondoOrders">
      <div className="navOrder">
        <NavBarAdmin />
      </div>
      <div>
        <h1 className="h1Orders">
          All orders <MdOutlineChecklist />
        </h1>
        <>
          {isLoading && <Loading />}
          <div>
            {currentServices.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table className="tableOrdAd">
                <thead className="thead1">
                  <tr>
                    <th>s/n</th>
                    <th>Date</th>
                    <th>Order ID</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody className="tbody1">
                  {currentServices.map((order, index) => {
                    const {
                      id,
                      orderDate,
                      orderTime,
                      orderAmount,
                      orderStatus,
                    } = order;
                    return (
                      <tr key={id} onClick={() => handleClick(id)}>
                        <td>{index + 1}</td>
                        <td>
                          {orderDate} at {orderTime}
                        </td>
                        <td>{id}</td>
                        <td>
                          {"$"}
                          {orderAmount}
                        </td>
                        <td>
                          <p>{orderStatus}</p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </>
      </div>
      <DashboardPaginado
        orders={orders.length}
        servicesPerPage={servicesPerPage}
        paged={paged}
      />
    </section>
  );
}
