const { User, Card, ShopingCart } = require("../../db");
const { Op } = require("sequelize");

const deleteItemShopingCart = async (req, res) => {
  const { userId, cardId } = req.query;
  try {
    //validando datos recibidos
    if (!userId) {
      return res.status(400).send("userId is requiered");
    } else {
      const searchUser = await User.findByPk(userId);
      if (searchUser === null)
        return res.status(400).send("This user does not exist");
    }
    let searchCard;
    if (!cardId) {
      return res.status(400).send("cardId is requiered");
    } else {
      searchCard = await Card.findByPk(cardId);
      if (searchCard === null)
        return res.status(400).send("This card does not exist");
    }
    //eliminando card seleccionada por el usuario
    await ShopingCart.destroy({
      where: {
        [Op.and]: [{ cardId: cardId }, { userId: userId }],
      },
    });
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
            attributes: ["id", "servicename", "price", "serviceimage"],
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

module.exports = { deleteItemShopingCart };