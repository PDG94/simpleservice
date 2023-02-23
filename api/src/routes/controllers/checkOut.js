const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51MeScXEohVMDTuBfmBYJyc74gdooLuzF08J56gwYME95LaznIe4WTjNuSsBhGqPdZq8vEw42aTvM1mD9gKpTv3Jb007xOADlTp"
);
const checkOut = async (req, res) => {
  const { id, amount, description, receipt_email } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      currency: "USD",
      amount: amount,
      description: description,
      payment_method: id,
      confirm: true,
      receipt_email,
    });
    console.log("payment test back", payment)
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = checkOut;