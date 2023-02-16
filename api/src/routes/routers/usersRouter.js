const {Router} = require("express")
const {getUsersHandler, postUserHandler} = require("../handlers/usersHandler")


const usersRouter = Router();


usersRouter.get("/", getUsersHandler )
usersRouter.post("/", postUserHandler)

module.exports = usersRouter;