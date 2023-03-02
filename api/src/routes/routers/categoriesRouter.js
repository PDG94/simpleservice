const {Router} = require('express');

const {getCategoriesHandler, postCategoryHandler, updateCategoryHandler} = require("../handlers/categoriesHandler");
const {getServicesListH} = require("../handlers/categorieServiceH");

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesHandler);

categoriesRouter.get("/:id", getServicesListH);

categoriesRouter.post("/", postCategoryHandler);

categoriesRouter.put("/", updateCategoryHandler);

module.exports = categoriesRouter;