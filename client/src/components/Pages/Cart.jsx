import { useEffect, /* useState */ } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  addToCart,
  decreaseCart,
  removeCart,
  clearCart,
  calculateSubTotal,
  calculateTotalQuantity,
  cleanState,
  saveUrl,
} from "../../redux/actions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "../Pages/cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const cartTotalAmount = useSelector((state) => state.cartTotalAmount);
  const cartTotalQuantity = useSelector((state) => state.cartTotalQuantity);
  const isLoggedIn1 = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = window.location.href;
  // console.log(cartItems)
  // const [, setAmount] = useState(0);
  // localStorage.clear();

  useEffect(() => {
    dispatch(calculateSubTotal());
    dispatch(calculateTotalQuantity());
    dispatch(saveUrl(""));
    return () => {
      dispatch(cleanState());
    };
  }, [cartItems, dispatch]);

  const checkout = () => {
    if (isLoggedIn1) {
      navigate("/checkout-details");
    } else {
      dispatch(saveUrl(url));
      navigate("/login");
    }
  };

  const increaseCart = (cart) => {
    // console.log(cart.cartQuantity)
    dispatch(calculateTotalQuantity())
    dispatch(addToCart(cart));
    // setAmount(cart.cartQuantity)
    dispatch(calculateSubTotal());
  };

  const decreaseCart1 = (cart) => {
    dispatch(calculateTotalQuantity())
    dispatch(calculateSubTotal());
    return dispatch(decreaseCart(cart));
  };
  const removeFromCart = (cart) => {
    dispatch(removeCart(cart));
  };
  const clearCart1 = () => {
    return dispatch(clearCart());
  };

  return (
    <div className="containerCart">
      <NavBar />
      <div className="cartBox">
        {cartItems.length === 0 ? (
          <div className="emptyBox">
            <h2 className="titleCart">Shopping Cart</h2>
            <div className="emptyCart">
              <p className="pEmpty">Your cart is currently empty</p>
              <br />
              <div>
                <Link className="btnEmpty" to="/services">
                  &larr;{"  "} Continue shopping{"  "}
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="tableCart">
            <div className="table table-responsive table-dark">
              <h2 className="titleCart">Shopping Cart</h2>
              <div>
                <Link className="btnEmpty" to="/services">
                  &larr; Continue shopping
                </Link>
              </div>
              <br />
              <table className="tableBoxCart">
                <thead>
                  <tr>
                    <th className="thCart">s/n</th>
                    <th className="thCart">Service</th>
                    <th className="thCart">Price</th>
                    <th className="thCart">Quantity</th>
                    <th className="thCart">Total</th>
                    <th className="thCart">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((cart, index) => {
                    const { id, servicename, price, cartQuantity } = cart;
                    return (
                      <tr key={id} className="table-secondary">
                        <td className="tdCart">{index + 1}</td>
                        <td className="tdCart">
                          <p>
                            <b>{servicename}</b>
                          </p>
                          <img
                            src={cart.Users[0].profilepic}
                            alt="img"
                            style={{ width: "100px" }}
                            className="imgCart"
                          />
                        </td>
                        <td className="tdCart">{price}</td>
                        <td className="tdCart">
                          <div className="quantCart">
                            <button
                              className="btnDecr"
                              onClick={() => decreaseCart1(cart)}
                            >
                              -
                            </button>
                            <p className="pQuant">
                              <b>{cartQuantity}</b>
                            </p>
                            <button
                              className="btnIncr"
                              onClick={() => increaseCart(cart)}
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="tdCart">
                          {(price * cartQuantity).toFixed(2)}
                        </td>
                        <td className="tdCart">
                          <FaTrashAlt
                            className="binCart"
                            size={26}
                            color="red"
                            onClick={() => removeFromCart(cart)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="totalContainer">
              <div>
                <button className="btn btn-danger" onClick={clearCart1}>
                  Clear Cart
                </button>
              </div>
              <div className="totalInfo">
                <p className="pCartItems">
                  <b> {`Cart item(s): ${cartTotalQuantity}`}</b>
                </p>
                <div className="boxTotal">
                  <h4 className="h4Total">Subtotal:</h4>
                  <h3 className="amount">{`$${cartTotalAmount.toFixed(2)}`}</h3>
                </div>
                <p>Tax an shipping calculated at checkout</p>
                <button
                  className="btn btn-primary btn-block"
                  onClick={checkout}
                >
                  Checkout
                </button>

                <br />
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
