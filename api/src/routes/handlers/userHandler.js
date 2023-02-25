const {
  updateUserInfo,
  deleteUser,
  getUserInfo,
} = require("../controllers/userController");

const getUserHandler = async (req, res) => {
  try {
    const userInfo = await getUserInfo(req.params);
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const params = { ...req.body, ...req.params };
    const userUpdated = await updateUserInfo(params);
    res.status(200).json({
      message: "User updated succesfully",
      updated: userUpdated,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteUserHandler = async (req, res) => {
  const active = false;
  const params = { ...req.params, active };
  const userDeleted = await deleteUser(params);
  res.status(200).json(userDeleted);
};

module.exports = { updateUserHandler, deleteUserHandler, getUserHandler };
