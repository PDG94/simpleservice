const {Router} = require('express');
const {getServicesHandler, postServiceHandler} = require("../middlewares/servicesHandler")

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.post("/", postServiceHandler);

module.exports = servicesRouter;