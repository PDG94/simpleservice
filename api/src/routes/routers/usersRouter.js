const {Router} = require("express")
const {getUsersHandler, postUserHandler} = require("../middlewares/usersHandler")


const usersRouter = Router();


usersRouter.get("/", getUsersHandler )
usersRouter.post("/", postUserHandler)

module.exports = usersRouter;