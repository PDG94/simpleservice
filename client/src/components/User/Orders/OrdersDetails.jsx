import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../CustomHooks/UseFetchDocuments";
import Loading from "../../Loading/Loading";
import { NavBarUser } from "../../index.js";
import "../Orders/orderDetails.css";

export default function OrdersDetail() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <div className="bgOrders">
      <NavBarUser />
      <div className="orderDetail">
        <Link to="/profile/orders">
          <button className="backCr">Back</button>
        </Link>
        <div className="MainBoxUserOrder">
          <br />
          <h2 className="h2OrderUser">Order Details</h2>

          {order === null ? (
            <Loading />
          ) : (
            <div className="">
              <div className="psOrder">
                <p>
                  <b>Order ID:</b> {order.id}
                </p>
                <p>
                  <b>Order Amount:</b> ${order.orderAmount}
                </p>
                <p>
                  <b>Order Status:</b> {order.orderStatus}
                </p>
              </div>

              <table className="tableContainerDetail table table-responsive table-info">
                <thead>
                  <tr>
                    <th className="thOrderDetail">s/n</th>
                    <th className="thOrderDetail">Product</th>
                    <th className="thOrderDetail">Price</th>
                    <th className="thOrderDetail">Quantity</th>
                    <th className="thOrderDetail">Total</th>
                    <th className="thOrderDetail">Action</th>
                  </tr>
                </thead>
                {order.cartItems1.map((cart, index) => {
                  const { id, servicename, price, cartQuantity } = cart;
                  return (
                    <tbody>
                      <tr className="table-secondary" key={id}>
                        <td className="tdOrderUsers2">
                          <b>{index + 1}</b>
                        </td>
                        <td className="tdOrderUsers2">
                          <p>
                            <b>{servicename}</b>
                          </p>
                          <img
                            src={cart.Users[0].profilepic}
                            alt={"img"}
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td className="tdOrderUsers2">
                          {"$"}
                          {price}
                        </td>
                        <td className="tdOrderUsers2">{cartQuantity}</td>
                        <td className="tdOrderUsers2">
                          {"$"}
                          {(price * cartQuantity).toFixed(2)}
                        </td>
                        <td className="tdOrderUsers2">
                          <Link to={`/profile/order-review/${id}`}>
                            <button className="btnOrderUser btn btn-dark">
                              Review
                            </button>
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
