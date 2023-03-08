import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../CustomHooks/UseFetchDocuments";
import Loading from "../../Loading/Loading";
import { NavBarUser } from "../../index.js";

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
      <div className={""}>
       
          <Link to="/profile/orders">
            <button className="backCr">Back</button>
        </Link>
        <div className="MainBoxUserOrder">
        <h2 className="h2OrderUser">Order Details</h2>
       
        <br />
        {order === null ? (
          <Loading />
        ) : (
          < div className="tabletable-responsive table-info">
            <p>
              <b>Order ID:</b> {order.id}
            </p>
            <p>
              <b>Order Amount:</b> ${order.orderAmount}
            </p>
            <p>
              <b>Order Status:</b> {order.orderStatus}
            </p>
            <br />
            <table className="tableContainer">
              <thead>
                <tr>
                  <th className="thOrderUsers">s/n</th>
                  <th className="thOrderUsers">Product</th>
                  <th className="thOrderUsers">Price</th>
                  <th className="thOrderUsers">Quantity</th>
                  <th className="thOrderUsers">Total</th>
                  <th className="thOrderUsers">Action</th>
                </tr>
              </thead>
                {order.cartItems1.map((cart, index) => {
                  const { id, servicename, price, cartQuantity } = cart;
                  return (
                    <tbody>
                    <tr className="table-secondary" key={id}>
                      <td className="tdOrderUsers">
                        <b>{index + 1}</b>
                      </td>
                      <td className="tdOrderUsers">
                        <p>
                          <b>{servicename}</b>
                        </p>
                        <img
                          src={cart.Users[0].profilepic}
                          alt={"img"}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td className="tdOrderUsers">
                        {"$"}
                        {price}
                      </td>
                      <td className="tdOrderUsers">{cartQuantity}</td>
                      <td className="tdOrderUsers">
                        {"$"}
                        {(price * cartQuantity).toFixed(2)}
                      </td>
                      <td className="tdOrderUsers">
                        <Link to={`/profile/order-review/${id}`}>
                          <button className="">Review Product</button>
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
