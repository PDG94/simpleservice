const {findUser} = require('../controllers/loginController')

const loginHandler = async (req, res) => {
  try {
    const{user_id, email, name} = req.user; //picture is in there too btw
    const userLogIn = await findUser(user_id, email, name);
    res.status(200).json(userLogIn)
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

module.exports = { loginHandler };
