require("dotenv").config
const express = require("express");
const cors = require("cors")
const app = express();
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

// This is your test secret API key.
app.use(cors())
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Welcome to SimpleService app.");
})
const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400 * 100;
};

app.post("/create-payment-intent", async (req, res) => {
  const { items, shipping, description} = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
    description,shipping:{
        adress:{
        line1: shipping-line1,
        line2: shipping-line2,
        city: shipping-city,
        country: shipping-country,
        postal_code: shipping.postal_code,
    },
    name: shipping.name,
    phone: shipping.phone,
    },
    // receipt_email: customeEmail
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

const PORT = process.env.PORT || 4242
app.listen(PORT, () => console.log(`Node server listening on port ${PORT}`));