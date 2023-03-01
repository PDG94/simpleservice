const { User, Card } = require("../../db");

const getUserInfo = async ({ id }) => {
  return await User.findOne({
    where: {
      id: id,
    },
    include: Card,
  });
};

const updateUserInfo = async ({ id, name, username, userbio, profilepic }) => {
  await User.update(
    {
      name,
      username,
      userbio,
      profilepic,
    },
    {
      where: {
        id: id,
      },
    }
  );

  const userUpdated = await User.findByPk(id);

  return userUpdated;
};

const deleteUser = async ({ id, active }) => {
  await User.update(
    {
      active,
    },
    {
      where: {
        id: id,
      },
    }
  );

  const userDeleted = await User.findByPk(id);

  return userDeleted;
};

const editService = async ({ id }) => {
  await Card.update(
    { servicename, serviceimage, description, price, active },
    {
      where: {
        id: id,
      },
    }
  );
  return await Card.findByPk(id);
};

module.exports = { updateUserInfo, deleteUser, getUserInfo, editService };
