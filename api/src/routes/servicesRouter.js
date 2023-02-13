const {Router} = require('express');
const {getServicesHandler} = require("./middlewares/servicesHandler")

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

module.exports = servicesRouter;