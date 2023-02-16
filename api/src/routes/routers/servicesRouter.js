const {Router} = require('express');
const {getServicesHandler, postServiceHandler, updateServiceHandler, getServicesByIdHandler} = require("../handlers/servicesHandler");

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.get("/:id", getServicesByIdHandler);

servicesRouter.post("/", postServiceHandler);

servicesRouter.put("/", updateServiceHandler);

module.exports = servicesRouter; 