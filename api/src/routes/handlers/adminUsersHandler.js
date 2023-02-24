const {
  getAllUsers,
  updateUser,
  getUserById,
  deleteUser,
} = require("../controllers/adminUsersController");

const getUsersHandler = async (req, res) => {
  try {
    const usersList = await getAllUsers();
    if (usersList.length < 1) {
      throw new Error("No users found");
    }
    res.status(200).json(usersList);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const getUserByIdHandler = async (req, res) => {
  try {
    const userFound = await getUserById(req.params);
    if (!userFound) {
      throw new Error("User not found");
    }
    res.status(200).json(userFound);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const params = { ...req.body, id };
    const userUpdated = await updateUser(params);
    res.status(200).json(userUpdated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const active = false;
    const params = {...req.params, active}
    const deletedUser = await deleteUser(params);
    res.status(200).json(deletedUser);
  } catch (error) {}
};

module.exports = {
  getUsersHandler,
  updateUserHandler,
  getUserByIdHandler,
  deleteUserHandler,
};
