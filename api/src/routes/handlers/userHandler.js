const {updateUserInfo} = require('../controllers/userController');

//updateUserHandler is placeholder code atm
const updateUserHandler = async (req, res) => {
    try {
      const userUpdated = await updateUserInfo(req.body);
      res.status(200).json({
        message: "User updated succesfully",
        updated: userUpdated,
      });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

module.exports = {updateUserHandler}