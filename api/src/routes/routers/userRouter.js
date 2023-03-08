const { Router } = require("express");

const {
  updateUserHandler,
  deleteUserHandler,
  getUserHandler,
  editServiceHandler,
} = require("../handlers/userHandler");

const userHandler = Router();

userHandler.get("/:id", getUserHandler);

userHandler.put("/", updateUserHandler);

userHandler.delete("/", deleteUserHandler);

userHandler.put("/service/:id", editServiceHandler);

module.exports = userHandler;
