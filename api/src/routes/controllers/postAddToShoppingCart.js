const { User, Card, Role, ShopingCart } = require("../../db");
const { roles } = require("../../../api.js");
const { Op } = require("sequelize");

const postAddToShopingCart = async (req, res) => {
  const { userId, cardId, amount } = req.body;
  const { add } = req.query;
  console.log(add);
  try {
    let errors = {};

    //validando datos recibidos
    let newUserPosition;
    let searchCard;
    if (cardId) {
      searchCard = await Card.findByPk(cardId);
      searchCard === null
        ? (errors.cardId = "This product does not exist")
        : null;
    } else {
      errors.cardId = "card Id is required";
    }
    if (userId) {
      const searchUser = await User.findByPk(userId);
      searchUser === null ? (errors.userId = "Invalid User ID") : null;
    } else {
      newUserPosition = await User.findAndCountAll();
    }
    if (amount !== undefined) {
      amount < 0
        ? (errors.amount = "Invalid amount, cannot be less than 0")
        : null;
    } else {
      errors.amount = "Amount is required";
    }

    //respuesta en caso de errores
    if (Object.keys(errors).length) return res.status(400).send(errors);
    
    //creando nuevo usuario temporal en caso de ser usuario no logueado
    let newUser;
    let searchShopingCart;
    if (!userId) {
      newUser = await User.create({
        name: "def",
        email: `def${newUserPosition.count + 1}@def.def`,
      });
    } else {
      //buscando card en el carrito de usuario en caso de previa existencia de usuario
      searchShopingCart = await ShopingCart.findOne({
        where: {
          [Op.and]: [{ userId: userId }, { cardId: cardId }],
        },
      });
      console.log("esta card", searchShopingCart);
    }
    if (!searchShopingCart) {
      //agregando card y cantidad
      await ShopingCart.create({
        cardId: cardId,
        userId: userId ? userId : newUser.id,
        amount: amount,
      });
    } else {
      //actualizando cantidad de card
      if (add) {
        await ShopingCart.update(
          {
            amount: searchShopingCart.amount + amount,
          },
          {
            where: {
              [Op.and]: [{ userId: userId }, { cardId: cardId }],
            },
          }
        );
      } else {
        await ShopingCart.update(
          {
            amount: amount,
          },
          {
            where: {
              [Op.and]: [{ userId: userId }, { cardId: cardId }],
            },
          }
        );
      }
    }
    //TODO:agregar id a User (es necesario primero crear un PutUser)
    return res.status(200).send({
      userId: userId ? userId : newUser.id,
      //totalProducts: totalProducts,
      message: `Card '${searchCard.name}' has been add`,
    });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = { postAddToShopingCart };