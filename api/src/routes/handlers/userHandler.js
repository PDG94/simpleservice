const {
  updateUserInfo,
  deleteUser,
  getUserInfo,
  editService,
} = require("../controllers/userController");

const getUserHandler = async (req, res) => {
  try {
    const { user_id } = req.user;
    const userInfo = await getUserInfo(user_id);
    if (userInfo === null) {
      throw new Error("No user found");
    }
    res.status(200).json(userInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const { user_id } = req.user;
    const params = { ...req.body, user_id };
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
  const { user_id } = req.user;
  // const params = { ...req.params, active };
  const userDeleted = await deleteUser(user_id, active);
  res.status(200).json(userDeleted);
};

const editServiceHandler = async (req, res) => {
  try {
    const params = { ...req.body, ...req.params };
    const updatedService = await editService(params);
    if (!updatedService) {
      throw new Error("nothing to update");
    }
    res.status(200).json({
      message: "Service updated succesfully",
      updated: updatedService,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  updateUserHandler,
  deleteUserHandler,
  getUserHandler,
  editServiceHandler,
};
