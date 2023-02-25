const admin = require("../config/firebase-config");

class Middleware {
  async decodeToken(req, res, next) {
    let token;
    if(req.headers.authorization){
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
  };

  async isThisAdmin(req, res, next){

  };

  async checkBody(req, res, next){
    if(!req.body.CategoryId){
      return res.status(400).json({error: "Please select a category id"})
    }

    return next();
  }
}

module.exports = new Middleware();
