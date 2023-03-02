const {findUser} = require('../controllers/loginController')

const loginHandler = async (req, res) => {
  try {
    const{uid, email, name, picture} = req.user; //picture is in there too btw
    const userLogIn = await findUser(uid, email, name, picture);
    res.status(200).json(userLogIn)
  } catch (error) {
    res.status(404).json({error: error.message});
  }
};

module.exports = { loginHandler };
