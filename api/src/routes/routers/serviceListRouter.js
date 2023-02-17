const {Router} = require("express")

const {getServiceListsHandler, postServiceListHandler, updateServiceListHandler} = require("../handlers/serviceListHandler");

const serviceListRouter = Router();

serviceListRouter.get("/", getServiceListsHandler);
serviceListRouter.post("/", postServiceListHandler);
serviceListRouter.put("/", updateServiceListHandler);

module.exports = serviceListRouter;