import s from './stripePayment.css'


import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {Elements, CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import axios from "axios";
const stripePromise = loadStripe(
  `pk_test_51MeScXEohVMDTuBfkv6jlBnpXq6EN6W0vJs3bFlepyOusbfYEuIAhoOXcsYFGgcDcOqwJLAqYL4qqNegKOdGJOvE00lBepiZlb`
);

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
        console.log("esto es el pay method",paymentMethod);
      //esta parte le envia el metodo de pago que tiene un id especial
      const { id } = paymentMethod;

      const { data } = await axios.post(`http://localhost:3001/checkout`, {
        // id o nombre del cliente 

        // email donde se enviara el recibo
        receipt_email: "p.d.g.38411422@gmail.com",
        // el id del metodo de pago que utilizo esto es parte de stripe
        id: id,
        // la cantidad del objeto que cuesta
        amount: 10000,
        // la descripcion del objeto que va a comprar
        description: "qwerty",
      });
      console.log("esto es el data del chechout",data)
    }
  };
  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <h2 className={s.label} >Introduce tu metodo de pago</h2>
        <CardElement className={s.input} />
        <button className={s.btn}>Buy</button>
      </form>
    </div>
  );
};
function PasarelaStripe() {
  return (
    <Elements stripe={stripePromise}>
      <CheckOutForm />
    </Elements>
  );
}

export default PasarelaStripe;