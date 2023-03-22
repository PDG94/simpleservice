import { useEffect } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Notiflix from "notiflix";
import {
  addToExinstingCart,
  addNewCart,
  reduceCartQuantity,
  removeCard,
  emptyCart,
  subTotalCalc,
  subTotalQuant,
  saveUrl,
} from "../../redux/actions/cartActions";
import { cleanState } from "../../redux/actions/servicesActions";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "../Pages/cart.css";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const isLoggedIn1 = useSelector((state) => state.users.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const url = window.location.href;

  const calculateSubTotal = () => {
    const array = [];
    cartItems.map((item) => {
      const { price, cartQuantity } = item;
      const cartItemAmount = price * cartQuantity;
      return array.push(cartItemAmount);
    });
    const totalAmount = array.reduce((a, b) => {
      return a + b;
    }, 0);
    return totalAmount;
  };

  const calculateTotalQuantity = () => {
    const array1 = [];
    if (cartItems) {
      // Agregamos un control de flujo para verificar si "cartItems" existe
      cartItems.map((item) => {
        const { cartQuantity } = item;
        const quantity = cartQuantity;
        return array1.push(quantity);
      });
    }
    const totalQuantity = array1.reduce((a, b) => {
      return a + b;
    }, 0);
    return totalQuantity;
  };

  useEffect(() => {
    const calculateTotalQuantity = () => {
      const array1 = [];
      if (cartItems) {
        // Agregamos un control de flujo para verificar si "cartItems" existe
        cartItems.map((item) => {
          const { cartQuantity } = item;
          const quantity = cartQuantity;
          return array1.push(quantity);
        });
      }
      const totalQuantity = array1.reduce((a, b) => {
        return a + b;
      }, 0);
      return totalQuantity;
    };
    const calculateSubTotal = () => {
      const array = [];
      cartItems.map((item) => {
        const { price, cartQuantity } = item;
        const cartItemAmount = price * cartQuantity;
        return array.push(cartItemAmount);
      });
      const totalAmount = array.reduce((a, b) => {
        return a + b;
      }, 0);
      return totalAmount;
    };
    dispatch(subTotalCalc(calculateSubTotal()));
    dispatch(subTotalQuant(calculateTotalQuantity()));
    dispatch(saveUrl(""));
    return () => {
      dispatch(cleanState()); //revisar este
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems, dispatch]);

  const checkout = () => {
    if (isLoggedIn1) {
      navigate("/checkout-details");
    } else {
      dispatch(saveUrl(url));
      navigate("/login");
    }
  };

  const increaseCart = (cart, index) => {
    if (index >= 0) {
      dispatch(addToExinstingCart(cart, index));
    } else {
      dispatch(addNewCart(cart));
    }
    dispatch(subTotalQuant(calculateTotalQuantity()));
    dispatch(subTotalCalc(calculateSubTotal()));
  };

  const decreaseCart1 = (cart, index) => {
    if (cartItems[index].cartQuantity > 1) {
      dispatch(reduceCartQuantity(cart, index));
    } else {
      dispatch(removeCard(cart));
    }
    dispatch(subTotalQuant(calculateTotalQuantity()));
    dispatch(subTotalCalc(calculateSubTotal()));
  };

  const removeFromCart = (cart) => {
    dispatch(removeCard(cart));
    dispatch(subTotalCalc(calculateSubTotal()));
  };

  const clearCart1 = () => {
    dispatch(emptyCart());
    dispatch(subTotalCalc(calculateSubTotal()));
  };

  const confirmDelete = (id) => {
    Notiflix.Confirm.show(
      "Clear Cart",
      "You are about to clear the cart",
      "Delete",
      "Cancel",
      function okCb() {
        clearCart1(id);
      },
      function cancelCb() {
        alert("If you say so...");
      },
      {
        width: "320px",
        borderRadius: "8px",
      }
    );
  };

  return (
    <div className="containerCart">
      <NavBar />
      <div className="cartBox">
        {cartItems.length === 0 ? (
          <div className="emptyBoxC">
            <h2 className="titleCart">Shopping Cart </h2>
            <div>
              <FaShoppingCart size={90} className="shoppingCart2" />
            </div>
            <div className="emptyCart">
              <p className="pEmpty">Your cart is currently empty</p>
              <br />
              <div>
                <Link className="btnEmpty1" to="/services">
                  &larr;Continue shopping
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="tableCart">
            <div className="table table-responsive table-dark">
              <div className="boxShop">
                <h1 className="titleCart1">
                  Shopping Cart <FaShoppingCart className="shoppingCart3" />
                </h1>

                <Link className="btnEmpty" to="/services">
                  &larr; Continue shopping
                </Link>
              </div>
              <br />
              <div className="tableBox">
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
                                onClick={() => decreaseCart1(cart, index)}
                              >
                                -
                              </button>
                              <p className="pQuant">
                                <b>{cartQuantity}</b>
                              </p>
                              <button
                                className="btnIncr"
                                onClick={() => increaseCart(cart, index)}
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
            </div>
            <div className="totalContainer">
              <div className="clearbtn">
                <button
                  className="btnRED btn btn-danger"
                  onClick={() => confirmDelete()}
                >
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
                <p style={{ color: "#c3cace" }}>
                  Tax an shipping calculated at checkout
                </p>
                <button
                  className="btn btn-primary btn-block"
                  style={{ width: "500px", height: "50px" }}
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
