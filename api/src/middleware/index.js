const admin = require("../config/firebase-config");
const { User } = require("../db");

const bringUser = async (id) => {
  return await User.findOne({
    where: {
      id: id,
      isAdmin: true,
    },
  });
};

class Middleware {
  async decodeToken(req, res, next) {
    let token;
    if (req.headers.authorization) {
      token = req.headers.authorization.split(" ")[1];
    }

    try {
      const decodeValue = await admin.auth().verifyIdToken(token);
      if (decodeValue) {
        req.user = decodeValue;
        return next();
      }
      return res.json({ message: "Unauthorized" });
    } catch (error) {
      return res.json({ error: error.message });
    }
  }

  async isThisAdmin(req, res, next) {
    try {
      const { user_id } = req.user;
      const userHere = await bringUser(user_id);
      console.log(userHere);
      if (userHere === null) {
        throw new Error("Not Found");
      }

      if (!userHere.isAdmin) {
        throw new Error("Not allowed");
      }
      req.admin = userHere;
      return next();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async checkBody(req, res, next) {
    if (!req.body.CategoryId) {
      return res.status(400).json({ error: "Please select a category id" });
    }

    return next();
  }
}

module.exports = new Middleware();
