import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CheckoutSummary/checkoutSummary.css";

const CheckoutSummary = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  return (
    <div className="boxSumma">
      <h2 className="h2CheckSum">Checkout Summary</h2>
      <hr />
      <div className="detailsSumm">
        {cartItems.lenght === 0 ? (
          <>
            <p>No item in your cart.</p>
            <button className="--btn">
              <Link to="/services">Back To Shop</Link>
            </button>
          </>
        ) : (
          <div>
            <p>
              <b>{`Cart item(s): ${cartTotalQuantity}`}</b>
            </p>
            {cartItems.map((item, index) => {
              const { servicename, price, cartQuantity } = item;
              return (
                <div key={index}>
                  <hr />
                  <h4>Service: "{servicename}"</h4>
                  <p>Quantity: {cartQuantity}</p>
                  <p>Unit price: ${price}</p>
                  <p>Set price: ${price * cartQuantity}</p>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
      <hr />
      <div className="subTotalSum">
        <h3> Subtotal:</h3>
        <h1>${cartTotalAmount.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default CheckoutSummary;
