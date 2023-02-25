const { User, Card, ShopingCart } = require("../../db");

const deleteItemShopingCart = async (req, res) => {
  const { userId, cardId } = req.query;
  try {

    //code

  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { deleteItemShopingCart };