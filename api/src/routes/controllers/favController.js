const { Fav, User, Card } = require("../../db");

const getUserFav = async ({ id }) => {
  const user = await User.findAll({
    where: {
      id: id,
      active: true,
    },
    include: {
      model: Fav,
      where: {
        active: true,
      },
      include: {
        model: Card,
        where: {
          active: true,
        },
        attributes: ["id", "servicename"],
      },
    },
  });
  return user;
};

const createUserFav = async (user_id, id) => {
    const fav = await Fav.create();
    const user = await User.findByPk(user_id);
    const service = await Card.findByPk(id);

    await user.addFav(fav);
    await service.addFav(fav);

    return fav;
};

const cardFav = async ({id}) => {
    const service = await Card.findAll({
        where:{
            id: id,
            active: true,
        },
        include:{
            model: Fav,
            where: {
                active: true
            },
            include:{
                model: User,
                where: {
                    active: true
                },
                attributes: ["id"]
            }
        }

    })
    return service;
};

const deleteFav = async (id, active) => {
    await Fav.update({active}, {
        where: {
            id: id
        }
    });

    return await Fav.findByPk(id);

}

module.exports = { getUserFav, createUserFav, cardFav, deleteFav };
