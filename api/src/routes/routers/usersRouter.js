const { Router } = require("express");
const middleware = require("../../middleware");
const {
  getUsersHandler,
  postUserHandler,
} = require("../handlers/usersHandler");

const usersRouter = Router();

usersRouter.get("/", getUsersHandler);
usersRouter.post("/", middleware.decodeToken, postUserHandler);

module.exports = usersRouter;
