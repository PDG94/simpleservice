import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storeOrders } from "../../../redux/actions/ordersActions";
import useFetchCollection from "../../CustomHooks/UseFetchCollection";
import Loading from "../../Loading/Loading";
import NavBarUser from "../NavBarUser/NavBarUser";

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
    <section>
      <NavBarUser />
      <div>
        <h2>Your Order History</h2>
        <p>
          Open an order to leave a <b>Product Review</b>
        </p>
        <br />
        <>
          {isLoading && <Loading />}
          <div>
            {filteredOrders.length === 0 ? (
              <p>No order found</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>s/n</th>
                    <th>Date</th>
                    <th>Order ID</th>
                    <th>Order Amount</th>
                    <th>Order Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOrders.map((order, index) => {
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
    </section>
  );
}
