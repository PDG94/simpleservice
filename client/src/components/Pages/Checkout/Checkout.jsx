import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
// import CheckoutForm from "../../components/checkoutForm/CheckoutForm";
import {
  calculateSubTotal,
  calculateTotalQuantity,
} from "../../../redux/actions";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Checkout = () => {
  const [message, setMessage] = useState("Initializing checkout...");
  const [clientSecret, setClientSecret] = useState("");

  const cartItems = useSelector((state) => state.cartItems);
  const totalAmount = useSelector((state) => state.cartTotalAmount);
  const customerEmail = useSelector((state) => state.email);

  const shippingAddress = useSelector((state) => state.shippingAddress);
  const billingAddress = useSelector((state) => state.selectBillingAddress);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateSubTotal());
    dispatch(calculateTotalQuantity());
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
