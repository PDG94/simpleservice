// import React, { useEffect, useState } from "react";
// import {
//   PaymentElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";
// import CheckoutSummary from "../checkoutSummary/CheckoutSummary";
// import { toast } from "react-toastify";
// import { useDispatch, useSelector } from "react-redux";
// import { addDoc, collection, Timestamp } from "firebase/firestore";
// import { db } from "../../firebase/config";
// import { useNavigate } from "react-router-dom";
// import { clearCart } from "../../redux/actions";

// const CheckoutForm = () => {
//   const [message, setMessage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const stripe = useStripe();
//   const elements = useElements();

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const userID = useSelector((state)=>state.userID);
//   const userEmail = useSelector((state)=>state.email);
//   const cartItems = useSelector((state)=>state.cartItems);
//   const cartTotalAmount = useSelector((state)=>state.cartTotalAmount);
//   const shippingAddress = useSelector((state)=>state.shippingAddress);

//   useEffect(() => {
//     if (!stripe) {
//       return;
//     }

//     const clientSecret = new URLSearchParams(window.location.search).get(
//       "payment_intent_client_secret"
//     );

//     if (!clientSecret) {
//       return;
//     }
//   }, [stripe]);

//   // Save order to Order History
//   const saveOrder = () => {
//     const today = new Date();
//     const date = today.toDateString();
//     const time = today.toLocaleTimeString();
//     const orderConfig = {
//       userID,
//       userEmail,
//       orderDate: date,
//       orderTime: time,
//       orderAmount: cartTotalAmount,
//       orderStatus: "Order Placed...",
//       cartItems,
//       shippingAddress,
//       createdAt: Timestamp.now().toDate(),
//     };
//     try {
//       addDoc(collection(db, "orders"), orderConfig);
//       dispatch(clearCart());
//       toast.success("Order saved");
//       navigate("/checkout-success");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage(null);

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsLoading(true);

//     const confirmPayment = await stripe
//       .confirmPayment({
//         elements,
//         confirmParams: {
//           // Make sure to change this to your payment completion page
//           return_url: `http://localhost:3001/checkout`,
//         },
//         redirect: "if_required",
//       })
//       .then((result) => {
//         // ok - paymentIntent // bad - error
//         if (result.error) {
//           toast.error(result.error.message);
//           setMessage(result.error.message);
//           return;
//         }
//         if (result.paymentIntent) {
//           if (result.paymentIntent.status === "succeeded") {
//             setIsLoading(false);
//             toast.success("Payment successful");
//             saveOrder();
//           }
//         }
//       });

//     setIsLoading(false);
//   };

//   return (
//     <section>
//       <div className=''>
//         <h2>Checkout</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//               <CheckoutSummary />
//           </div>
//           <div>
//               <h3>Stripe Checkout</h3>
//               <PaymentElement id={styles["payment-element"]} />
//               <button
//                 disabled={isLoading || !stripe || !elements}
//                 id="submit"
//                 className={styles.button}
//               >
//                 <span id="button-text">
//                   {isLoading ? (
//                     <img
//                       src={spinnerImg}
//                       alt="Loading..."
//                       style={{ width: "20px" }}
//                     />
//                   ) : (
//                     "Pay now"
//                   )}
//                 </span>
//               </button>
//               {/* Show any error or success messages */}
//               {message && <div id={styles["payment-message"]}>{message}</div>}
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default CheckoutForm;