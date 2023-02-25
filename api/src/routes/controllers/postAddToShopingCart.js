const { User, Card, Role, ShopingCart } = require("../../db");

const postAddToShopingCart = async (req, res) => {
  const { userId, cardId, amount } = req.body;
  const { add } = req.query;
  try {

    //code

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postAddToShopingCart };