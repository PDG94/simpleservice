const Stripe = require("stripe");

const stripe = new Stripe(
  "sk_test_51MeScXEohVMDTuBfmBYJyc74gdooLuzF08J56gwYME95LaznIe4WTjNuSsBhGqPdZq8vEw42aTvM1mD9gKpTv3Jb007xOADlTp"
);
const checkOut = async (req, res) => {
  const { id, amount, desc } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: desc,
      payment_method: id,
      
      confirm: true, //confirm the payment at the same time
    });
    res.send({ message: "Succesfull payment" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = checkOut;
