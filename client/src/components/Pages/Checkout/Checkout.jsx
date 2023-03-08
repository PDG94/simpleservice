import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
// import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import {
  subTotalCalc,
  subTotalQuant,
} from "../../../redux/actions/cartActions";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
  const [message, setMessage] = useState("Initializing checkout...");
  const [clientSecret, setClientSecret] = useState("");

  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const customerEmail = useSelector((state) => state.users.email);

  const shippingAddress = useSelector((state) => state.orders.shippingAddress);
  const billingAddress = useSelector(
    (state) => state.orders.selectBillingAddress
  );

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

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(subTotalCalc(calculateSubTotal()));
    dispatch(subTotalQuant(calculateTotalQuantity()));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, cartItems]);

  const description = `Simple Service payment: email: ${customerEmail}, Amount: ${totalAmount}`;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:4242/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cartItems,
        userEmail: customerEmail,
        shipping: shippingAddress,
        billing: billingAddress,
        description,
      }),
    })
      .then(async (res) => {
        if (res.ok) {
          return res.json();
        }
        const json = await res.json();
        return await Promise.reject(json);
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      })
      .catch((error) => {
        setMessage("Failed to initialize checkout");
        toast.error(error, "Something went wrong!!!");
      });
  }, [billingAddress, shippingAddress, customerEmail, cartItems, description]);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <section>
        <div className="containerCheck">
          {!clientSecret && <h3>{message}</h3>}
        </div>
      </section>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          {/* <CheckoutForm /> */}
        </Elements>
      )}
    </>
  );
};

export default Checkout;
