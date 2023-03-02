const { getAllUsers, createUser } = require("../controllers/usersController");

const getUsersHandler = async (req, res) => {
  try {
    const { name } = req.query;
    const allUsers = await getAllUsers();

    if (name) {
      let nameUser = await allUsers.filter((user) =>
        user.name.toLowerCase().includes(name.toLowerCase())
      );
      if (nameUser.length > 0) {
        res.status(200).send(nameUser);
        return;
      } else {
        throw new Error("User not found");
      }
    }
    if (allUsers.length > 0) {
      res.status(200).json(allUsers);
    } else {
      throw new Error("Users not found");
    }
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
};

const postUserHandler = async (req, res) => {
  try {
    const { user_id, email } = req.user;

    const userInfo = { ...req.body, user_id, email };

    const postUser = await createUser(userInfo);
    res.status(200).json({
      message: " User created successfully",
      created: postUser,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getUsersHandler,
  postUserHandler,
};
