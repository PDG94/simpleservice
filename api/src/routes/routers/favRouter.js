const {Router} = require("express");
const middleware = require("../../middleware");
const {getUserFavHandler, cardFavHandler, postUserFavHandler, deleteFavHandler} = require("../handlers/favHandler")

const favRouter = Router();

favRouter.get("/user/:id", getUserFavHandler); //user id

favRouter.post("/user/:id", middleware.decodeToken, postUserFavHandler); //control this one

favRouter.get("/service/:id", cardFavHandler);

favRouter.delete("/:id", middleware.decodeToken, deleteFavHandler); //fav id

module.exports= favRouter;