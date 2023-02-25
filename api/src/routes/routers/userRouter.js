const {Router} = require('express');

const {updateUserHandler, deleteUserHandler} = require('../handlers/userHandler');

const userHandler = Router();

// userHandler.get("/:id",)

// userHandler.post("/", )

userHandler.put("/:id", updateUserHandler)

userHandler.delete("/:id", deleteUserHandler)

module.exports = userHandler;
