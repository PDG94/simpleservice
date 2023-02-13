const {Router} = require("express")
const {getUsersHandler} = require("./middlewares/usersHandler")


const usersRouter = Router();


usersRouter.get("/", getUsersHandler )

module.exports = usersRouter;