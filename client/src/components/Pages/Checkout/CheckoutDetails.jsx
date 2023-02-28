import React from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import "../Checkout/checkoutDetails.css";
import CheckoutSummary from "../../CheckoutSummary/CheckoutSummary";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../../redux/actions";
import { useNavigate } from "react-router-dom";
const stripePromise = loadStripe(
  `pk_test_51MeScXEohVMDTuBfkv6jlBnpXq6EN6W0vJs3bFlepyOusbfYEuIAhoOXcsYFGgcDcOqwJLAqYL4qqNegKOdGJOvE00lBepiZlb`
);

const CheckOutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cartTotalAmount = useSelector((state) => state.cartTotalAmount);
  const totalPayment = parseFloat(cartTotalAmount.toFixed(2), 0) * 100;
  const paraInvocar = () => {
    window.location.reload(true);
  };
  const clearCart1 = () => {
    dispatch(clearCart());
    navigate("/home");
    paraInvocar();
  };

  const clearAndBack = () => {
    setTimeout(clearCart1, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      // esto es para configurar el recuadro donde se pone la tarjeta de credito y los datos
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      //esta parte le envia el metodo de pago que tiene un id especial
      const { id } = paymentMethod;

      try {
        const { data } = await axios.post(
          "https://simpleservice-production.up.railway.app/checkout",
          {
            id,
            amount: totalPayment,
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
        toast.success("Payment Succesfully!");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="containerCheckDetail">
      <form className="formCheckout" onSubmit={handleSubmit}>
        <h2 className="labelCheck">Introduce tu metodo de pago</h2>
        <br />
        <br />
        <div className="inpuCh">
          <CardElement className="inputCheck" />
        </div>
        <br />
        <br />
        <div>
          <button className="btn btn-success" onClick={clearAndBack}>
            Buy
          </button>
        </div>
        <div></div>
        <CheckoutSummary className="chSum" />
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
