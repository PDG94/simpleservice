import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../CustomHooks/UseFetchDocuments";
import Loading from "../../Loading/Loading";

export default function OrdersDetail() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <section>
      <div className={""}>
        <h2>Order Details</h2>
        <div>
          <Link to="/profile/orders">&larr; Back To Orders</Link>
        </div>
        <br />
        {order === null ? (
          <Loading />
        ) : (
          <>
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
            <table>
              <thead>
                <tr>
                  <th>s/n</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {order.cartItems1.map((cart, index) => {
                  const { id, servicename, price, cartQuantity } = cart;
                  return (
                    <tr key={id}>
                      <td>
                        <b>{index + 1}</b>
                      </td>
                      <td>
                        <p>
                          <b>{servicename}</b>
                        </p>
                        <img
                          src={cart.Users[0].profilepic}
                          alt={"img"}
                          style={{ width: "100px" }}
                        />
                      </td>
                      <td>
                        {"$"}
                        {price}
                      </td>
                      <td>{cartQuantity}</td>
                      <td>
                        {"$"}
                        {(price * cartQuantity).toFixed(2)}
                      </td>
                      <td className="">
                        <Link to={`/profile/order-review/${id}`}>
                          <button className="">Review Product</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
}
