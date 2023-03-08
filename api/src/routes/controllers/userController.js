const { User, Card } = require("../../db");

const getUserInfo = async ({ id }) => {
  const response = await User.findOne({
    where: {
      id: id,
      active: true,
    },
    include: {
      model: Card,
    },
  });
  return response;
};

const updateUserInfo = async ({ name, username, userbio, profilepic, id }) => {
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

  const userDeleted = await User.findByPk(user_id);

  return userDeleted;
};

const editService = async ({
  id,
  servicename,
  serviceimage,
  description,
  price,
  active,
}) => {
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
