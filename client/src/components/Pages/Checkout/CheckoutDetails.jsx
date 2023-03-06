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
// import { clearCart, saveUrl } from "../../../redux/actions";
import { emptyCart } from "../../../redux/actions/cartActions";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase/config";
const stripePromise = loadStripe(
  `pk_test_51MeScXEohVMDTuBfkv6jlBnpXq6EN6W0vJs3bFlepyOusbfYEuIAhoOXcsYFGgcDcOqwJLAqYL4qqNegKOdGJOvE00lBepiZlb`
);

const CheckOutForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const totalPayment = parseFloat(cartTotalAmount.toFixed(2), 0) * 100;
  const cartItems1 = useSelector((state) => state.cart.cartItems);
  const userID1 = useSelector((state) => state.users.userID);
  const customerEmail = useSelector((state) => state.users.email);

  const clearCart1 = () => {
    dispatch(emptyCart());
    navigate("/home");
  };

  const clearAndBack = () => {
    setTimeout(clearCart1, 3000);
  };

  const saveOrder = () => {
    const today = new Date();
    const date = today.toDateString();
    const time = today.toLocaleTimeString();
    const orderConfig = {
      userID1,
      orderDate: date,
      orderTime: time,
      orderAmount: cartTotalAmount,
      cartItems1,
      orderStatus: " ✓ Order purchased... ",
      createdAt: Timestamp.now().toDate(),
    };
    try {
      addDoc(collection(db, "orders"), orderConfig);
      dispatch(emptyCart());
      toast.success("Order saved");
    } catch (error) {
      toast.error(error.message);
    }
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
            amount: totalPayment,
            id,
            userID1,
            userEmail: customerEmail,
            items: cartItems1,
          }
        );
        console.log(data);

        elements.getElement(CardElement).clear();
        toast.success("Payment Succesful!");
        saveOrder();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="containerCheckDetail">
      <form className="formCheck" onSubmit={handleSubmit}>
        <h2 className="cardCheck">Enter your payment method</h2>
        <div className="boxDetInp" style={{ height: 680 }}>
          <div className="inpuCheck">
            <CardElement className="inputCheck" />
          </div>
          <div className="btnCheck">
            <button className="btn btn-success" onClick={clearAndBack}>
              Buy
            </button>
          </div>

          <div className="chSum">
            <CheckoutSummary />
          </div>
        </div>
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
