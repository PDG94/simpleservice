const { User } = require("../../db");

const findUser = async (user_id, email, name) => {
  const [user, created] =await User.findOrCreate({
    where: { id: user_id },
    defaults: {
      id: user_id,
      email,
      username: name,
      name: name
    },
  });
  if (created) {
    return { message: "User registered", user };
  }
  if (user) {
    return { message: "User succesfully logged in", user};
  }
};

module.exports = {
  findUser,
};
