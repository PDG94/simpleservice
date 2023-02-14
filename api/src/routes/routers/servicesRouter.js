const {Router} = require('express');
const {getServicesHandler, postServiceHandler, updateServiceHandler} = require("../middlewares/servicesHandler");

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.post("/", postServiceHandler);

servicesRouter.put("/", updateServiceHandler);

module.exports = servicesRouter;