import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { storeOrders } from "../../../redux/actions/ordersActions";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import Loading from "../../Loading/Loading";
import "./ordersUser.css";
import { NavBarUser } from "../../index.js";

export default function OrderHistory() {
  const userID1 = useSelector((state) => state.users.userID);
  const orders = useSelector((state) => state.orders.orderHistory);
  const { data, isLoading } = useFetchCollection("orders");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(storeOrders(data));
  }, [dispatch, data]);

  const filteredOrders = orders.filter((order) => order.userID1 === userID1);

  const handleClick = (id) => {
    navigate(`/profile/order-details/${id}`);
  };

  return (
    <div className="bgOrders">
      <NavBarUser />
      <div>
        <Link to={"/profile"}>
          <button className="backCr">Back</button>
        </Link>
        <div className="MainBoxUserOrder">
          <br />
          <p className="h2OrderUser">Your Order History</p>
          <p className="emptyP1">
            Open an order to give a <b> Review</b> of the service
          </p>
          <br />
          <div className="mainOrd">
            {isLoading && <Loading />}
            <div className="table table-responsive table-info">
              {filteredOrders.length === 0 ? (
                <p className="emptyP2">No order found</p>
              ) : (
                <table className="tableContainerOrder">
                  <thead>
                    <tr>
                      <th className="thOrderUsers">s/n</th>
                      <th className="thOrderUsers">Date</th>
                      <th className="thOrderUsers">Order ID</th>
                      <th className="thOrderUsers">Order Amount</th>
                      <th className="thOrderUsers">Order Status</th>
                    </tr>
                  </thead>

                  {filteredOrders.map((order, index) => {
                    const {
                      id,
                      orderDate,
                      orderTime,
                      orderAmount,
                      orderStatus,
                    } = order;
                    return (
                      <tbody className="tbodyUser">
                        <tr
                          className="table-secondary"
                          key={id}
                          onClick={() => handleClick(id)}
                        >
                          <td className="tdOrderUsers">{index + 1}</td>
                          <td className="tdOrderUsers">
                            {orderDate} at {orderTime}
                          </td>
                          <td className="tdOrderUsers">{id}</td>
                          <td className="tdOrderUsers">
                            {"$"}
                            {orderAmount}
                          </td>
                          <td className="tdOrderUsers">
                            <p>{orderStatus}</p>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
