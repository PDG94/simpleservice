const { User, Card, ShopingCart } = require("../../db");
const { Op } = require("sequelize");

const getShopingCart = async (req, res) => {
  const { userId } = req.query;
  try {
    //validando datos recibidos
    if (!userId) {
      return res.status(400).send("userId is requiered");
    } else {
      const searchUser = await User.findByPk(userId);
      if (searchUser === null)
        return res.status(400).send("This user does not exist");
    }
    //obteniendo cards seleccionadas por el usuario
    const inCart = await ShopingCart.findAll({
      where: {
        userId: userId,
        amount: {
          [Op.not]: [0],
        },
      },
      attributes: ["amount", "cardId"],
    });
    //le damos formato antes de enviar al front
    let cart = [];
    let aux;
    if (inCart.length) {
      cart = await Promise.all(
        inCart.map(async (card) => {
          aux = await Card.findByPk(card.cardId, {
            attributes: ["id", "name", "price", "image"],
          });
          return {
            id: aux.id,
            servicename: aux.servicename,
            serviceimage: aux.serviceimage,
            price: aux.price,
            amount: card.amount,
            subtotal: aux.price * card.amount,
          };
        })
      ).then((e) => e);
    }
    return res.status(200).send(cart);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { getShopingCart };