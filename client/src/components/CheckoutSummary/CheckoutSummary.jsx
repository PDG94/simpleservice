import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../CheckoutSummary/checkoutSummary.css";

const CheckoutSummary = () => {
<<<<<<< HEAD
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );

  return (
    <div>
      <h3>Checkout Summary</h3>
=======
  const cartItems = useSelector((state) => state.cartItems);
  console.log(cartItems);
  const cartTotalAmount = useSelector((state) => state.cartTotalAmount);
  const cartTotalQuantity = useSelector((state) => state.cartTotalQuantity);

  return (
    <div className="boxSumma">
      <h2 className="h2CheckSum">Checkout Summary</h2>
      <hr />
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
      <div>
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
<<<<<<< HEAD
            <div>
              <h4>Subtotal:</h4>
              <h3>{cartTotalAmount.toFixed(2)}</h3>
            </div>
=======
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
            {cartItems.map((item, index) => {
              const { id, servicename, price, cartQuantity } = item;
              return (
                <div key={index}>
<<<<<<< HEAD
                  <h4>Service: "{servicename}"</h4>
                  <p>Quantity: {cartQuantity}</p>
                  <p>Unit price: {price}</p>
                  <p>Set price: {price * cartQuantity}</p>
=======
                  <hr/>
                  <h4>Service: "{servicename}"</h4>
                  <p>Quantity: {cartQuantity}</p>
                  <p>Unit price: ${price}</p>
                  <p>Set price: ${price * cartQuantity}</p>
                  <hr/>
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
                </div>
              );
            })}
          </div>
        )}
      </div>
<<<<<<< HEAD
=======
      <hr/>
      <div className="subTotalSum">
        <h3> Subtotal:</h3>
        <h1>${cartTotalAmount.toFixed(2)}</h1>
      </div>
>>>>>>> 0cdebd0910deb50866d52293a29c1c8b02695857
    </div>
  );
};

export default CheckoutSummary;
