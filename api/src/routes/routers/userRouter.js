const {Router} = require('express');

const {updateUserHandler} = require('../handlers/userHandler');

const userHandler = Router();

// userHandler.post("/", )

userHandler.put("/", updateUserHandler)

module.exports = userHandler;
