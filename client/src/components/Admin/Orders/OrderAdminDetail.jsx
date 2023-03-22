import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchDocument from "../../CustomHooks/UseFetchDocuments";
import Loading from "../../Loading/Loading";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import "../Orders/orderAdminDetail.css";

export default function OrderAdminDetail() {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const { document } = useFetchDocument("orders", id);

  useEffect(() => {
    setOrder(document);
  }, [document]);

  return (
    <div className="detailAdmin">
      <div className="navAdminDet">
        <NavBarAdmin />
      </div>
      <div className="orderAdminDetail">
        <Link to="/admin/orders">
          <button className="backAdmin">Back</button>
        </Link>
        <div className="MainBoxAdminOrder">
          <h1 className="h1OrderAdmin">Order Details</h1>

          {order === null ? (
            <Loading />
          ) : (
            <div className="tabletable-responsive table-info">
              <div className="psOrderAdmin">
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

              <table className="tableContainerDetAdmin">
                <thead>
                  <tr>
                    <th className="thOrderDetAdmin">s/n</th>
                    <th className="thOrderDetAdmin">Product</th>
                    <th className="thOrderDetAdmin">Price</th>
                    <th className="thOrderDetAdmin">Quantity</th>
                    <th className="thOrderDetAdmin">Total</th>
                  </tr>
                </thead>
                {order.cartItems1.map((cart, index) => {
                  const { id, servicename, price, cartQuantity } = cart;
                  return (
                    <tbody>
                      <tr className="table-secondary" key={id}>
                        <td className="tdOrderAdmin2">
                          <b>{index + 1}</b>
                        </td>
                        <td className="tdOrderAdmin2">
                          <p>
                            <b>{servicename}</b>
                          </p>
                          <img
                            src={cart.Users[0].profilepic}
                            alt={"img"}
                            style={{ width: "100px" }}
                          />
                        </td>
                        <td className="tdOrderAdmin2">
                          {"$"}
                          {price}
                        </td>
                        <td className="tdOrderAdmin2">{cartQuantity}</td>
                        <td className="tdOrderAdmin2">
                          {"$"}
                          {(price * cartQuantity).toFixed(2)}
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
