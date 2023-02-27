import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CheckoutSummary = () => {
    const cartItems = useSelector((state)=>state.cartItems);
    console.log(cartItems);
    const cartTotalAmount = useSelector((state)=>state.cartTotalAmount);
    const cartTotalQuantity = useSelector((state)=>state.cartTotalQuantity);
  
    return (
      <div>
        <h3>Checkout Summary</h3>
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
              <div>
                <h4>Subtotal:</h4>
                <h3>{cartTotalAmount.toFixed(2)}</h3>
              </div>
              {cartItems.map((item, index) => {
                const { id, servicename, price, cartQuantity } = item;
                return (
                  <div key={index}>
                    <h4>Service: "{servicename}"</h4>
                    <p>Quantity: {cartQuantity}</p>
                    <p>Unit price: {price}</p>
                    <p>Set price: {price * cartQuantity}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  };
  
  export default CheckoutSummary;