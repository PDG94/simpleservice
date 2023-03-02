const { User } = require("../../db");

const findUser = async (uid, email, name, picture) => {
  const [user, created] =await User.findOrCreate({
    where: { id: uid },
    defaults: {
      id: uid,
      email,
      username: name,
      name: name,
      profilepic: picture,
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
