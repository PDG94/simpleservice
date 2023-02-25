const { Router } = require("express");
const {
  getServicesHandler,
  postServiceHandler,
  updateServiceHandler,
  getServicesByIdHandler,
} = require("../handlers/servicesHandler");
const middleware = require("../../middleware");

const servicesRouter = Router();

servicesRouter.get("/", getServicesHandler);

servicesRouter.get("/:id", getServicesByIdHandler);

servicesRouter.post("/", middleware.decodeToken, middleware.checkBody, postServiceHandler);

servicesRouter.put("/", middleware.decodeToken, updateServiceHandler);

module.exports = servicesRouter;
