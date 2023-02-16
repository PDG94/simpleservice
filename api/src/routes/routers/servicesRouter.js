const {Router} = require('express');
const {getServicesHandler, postServiceHandler, updateServiceHandler} = require("../handlers/servicesHandler");

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.post("/", postServiceHandler);

servicesRouter.put("/", updateServiceHandler);

module.exports = servicesRouter; 