const { Router } = require("express");
// const {isThisAdmin} = require("../../middleware");
const {
  getUsersHandler,
  updateUserHandler,
  getUserByIdHandler,
  deleteUserHandler,
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

const adminRouter = Router();

adminRouter.get("/users", getUsersHandler);

adminRouter.get("/users/:id", getUserByIdHandler);

adminRouter.get("/categories", getAllCategoriesHandler);

adminRouter.get("/services", getServicesHandler);

adminRouter.post("/categories", createCategoryHandler);

adminRouter.post("/services", createServiceHandler);

adminRouter.put("/users/:id", updateUserHandler);

adminRouter.put("/categories/:id", updateCategoryHandler);

adminRouter.put("/services/:id", updateServiceHandler);

adminRouter.delete("/users/:id", deleteUserHandler);

adminRouter.delete("/categories/:id", deleteCategoryHandler);

adminRouter.delete("/services/:id", deleteServiceHandler);

module.exports = adminRouter;
