const { Router } = require("express");
const middleware = require("../../middleware");
const {
  getUsersHandler,
  updateUserHandler,
  getUserByIdHandler,
  deleteUserHandler,
  adminUserHandler,
} = require("../handlers/adminUsersHandler");
const {
  getAllCategoriesHandler,
  createCategoryHandler,
  updateCategoryHandler,
  deleteCategoryHandler,
} = require("../handlers/adminCategoriesHandler");
const {
  getServicesHandler,
  createServiceHandler,
  updateServiceHandler,
  deleteServiceHandler,
} = require("../handlers/adminServicesHandler");
const { metricsHandler } = require("../handlers/adminMetricsHandler");

const adminRouter = Router();

adminRouter.get("/users", getUsersHandler);

adminRouter.get("/users/:id", getUserByIdHandler);

adminRouter.get("/categories", getAllCategoriesHandler);

adminRouter.get("/services", getServicesHandler);

adminRouter.get("/metrics", metricsHandler); //stats for users and services

adminRouter.post("/categories", createCategoryHandler);

adminRouter.post("/services", createServiceHandler);

adminRouter.put("/users/:id", updateUserHandler);

adminRouter.put("/adminrights/:id", adminUserHandler);

adminRouter.put("/categories/:id", updateCategoryHandler);

adminRouter.put("/services/:id", updateServiceHandler);

adminRouter.delete("/users/:id", deleteUserHandler);

adminRouter.delete("/categories/:id", deleteCategoryHandler);

adminRouter.delete("/services/:id", deleteServiceHandler);

adminRouter.get(
  "/check",
  middleware.decodeToken,
  middleware.isThisAdmin,
  (req, res) => {
    try {
      res.status(200).json(req.admin);
    } catch (error) {
      res.status(400).json({ message: "Not authorized" });
    }
  }
);

module.exports = adminRouter;
