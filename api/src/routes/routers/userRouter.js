const { Router } = require("express");

const {
  updateUserHandler,
  deleteUserHandler,
  getUserHandler,
} = require("../handlers/userHandler");

const userHandler = Router();

userHandler.get("/:id", getUserHandler);

// userHandler.post("/", )

userHandler.put("/:id", updateUserHandler);

userHandler.delete("/:id", deleteUserHandler);

module.exports = userHandler;
