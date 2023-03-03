const {
  updateUserInfo,
  deleteUser,
  getUserInfo,
  editService,
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

const editServiceHandler = async (req, res) => {
  try {
    let { servicename, description, price, active, serviceimage } = req.body;
    if (active === "true") {
      active = true;
    }
    if (active === "false") {
      active = false;
    }
    const params = { servicename, description, price, serviceimage, ...req.params };
    const updatedService = await editService(params);
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
