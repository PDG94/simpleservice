const {Router} = require('express');
const {getServicesHandler, postServiceHandler, updateServiceHandler} = require("../middlewares/servicesHandler")
console.log(updateServiceHandler)

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.post("/", postServiceHandler);

servicesRouter.put("/", updateServiceHandler);

module.exports = servicesRouter;