const { Router } = require("express");

const {
  updateUserHandler,
  deleteUserHandler,
  getUserHandler,
  editServiceHandler,
} = require("../handlers/userHandler");

const userHandler = Router();

userHandler.get("/:id", getUserHandler);

userHandler.put("/:id", updateUserHandler);

userHandler.delete("/:id", deleteUserHandler);

userHandler.put("/service/:id", editServiceHandler);

module.exports = userHandler;
