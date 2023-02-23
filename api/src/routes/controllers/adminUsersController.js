const { User } = require("../../db");

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async ({ id }) => {
  return await User.findByPk(id);
};

const updateUser = async ({
  id,
  name,
  username,
  userbio,
  profilepic,
  active,
  isAdmin,
}) => {
  await User.update(
    { name, username, userbio, profilepic, active, isAdmin },
    { where: { id: id } }
  );

  return await User.findByPk(user_id);
};

const deleteUser = async ({ id }) => {
  return await User.update({ active }, { where: { id: id, active: true } });
};

module.exports = { getAllUsers, updateUser, getUserById, deleteUser };
