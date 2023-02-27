import React from "react";
import s from "./Payment.module.css";
import {Link} from "react-router-dom"
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
const stripePromise = loadStripe(
  "pk_test_51MeScXEohVMDTuBfkv6jlBnpXq6EN6W0vJs3bFlepyOusbfYEuIAhoOXcsYFGgcDcOqwJLAqYL4qqNegKOdGJOvE00lBepiZlb"
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //esta parte le envia el metodo de pago que tiene un id especial
      const { id } = paymentMethod;
      console.log("este deberia ser id para stripe", id)
      const { data } = await axios.post("https://simpleservice-production.up.railway.app/checkoutcheckout",
       {
        id,
        amount: 15000,
      });
      console.log(data);
    }
    else{
      console.log("error de stripe")
    }
  };
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={s.label} >Introduce tu metodo de pago</h2>
        <CardElement className={s.input} />
        <Link to="/cart">
        <button className={s.btn}>Buy</button>
        </Link>
      </form>
    </div>
  );
};
function PasarelaStripe() {
  return (
    <Elements stripe={stripePromise}>
      <div>
      <CheckOutForm />
      </div>
      
    </Elements>
  );
}

export default PasarelaStripe;
