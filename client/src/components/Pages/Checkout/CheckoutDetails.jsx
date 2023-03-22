import React from "react";
import { toast } from "react-toastify";
import { loadStripe } from "@stripe/stripe-js";
import "../Checkout/checkoutDetails.css";
import CheckoutSummary from "../../CheckoutSummary/CheckoutSummary";
import {
  Elements,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import cardis from "../../Imagenes/cards.png";
import { emptyCart } from "../../../redux/actions/cartActions";
import { Link, useNavigate } from "react-router-dom";
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
  const customerName = useSelector((state) => state.users.useName);

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
      card: elements.getElement(CardNumberElement),
    });

    if (!error) {
      //esta parte le envia el metodo de pago que tiene un id especial
      const { id } = paymentMethod;

      const items = cartItems1.map((element) => element.servicename);
      const itemsDesc = JSON.stringify(items);
      try {
        await axios.post(
          "https://simpleservice-production.up.railway.app/checkout",
          {
            amount: totalPayment,
            id,
            userID1,
            userEmail: customerEmail,
            items: cartItems1,
            desc: itemsDesc,
          }
        );

        await axios.post(
          "https://simpleservice-production.up.railway.app/pago",
          {
            name: customerName,
            email: customerEmail,
            amount: totalPayment / 100,
            items: items,
          }
        );
        // elements.getElement(CardNumberElement).clear();
        toast.success("Payment Succesful!");
        saveOrder();
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="containerCheckDetail">
      <div className="contFor">
        <form className="formCheck" onSubmit={handleSubmit}>
          <Link
            className="linkCheck"
            to="/cart"
            style={{
              textDecoration: "none",
            }}
          >
            <button className="btnCheck">Go Back</button>
          </Link>

          <h2 className="cardCheck">Enter your payment method</h2>

          <div className="chSum">
            <CheckoutSummary />
          </div>
          <div className="boxDetInp" style={{ height: 550 }}>
            <img src={cardis} alt="cardis" className="cardis" />
            <div className="Check">
              <span>Number Card</span>
              <div className="inputCheck">
                <CardNumberElement />
              </div>
              <hr />
              <span>Expiry</span>
              <div className="inputExp">
                <CardExpiryElement />
              </div>
              <hr />
              <span>CVC</span>
              <div className="inputCvc">
                <CardCvcElement />
              </div>
            </div>
            <div className="btnPay">
              <button
                className="btn btn-success"
                onClick={clearAndBack}
                style={{ width: "400px", height: "55px" }}
              >
                Pay
              </button>
            </div>
          </div>
        </form>
      </div>
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
