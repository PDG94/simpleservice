const {Router} = require('express');
const {getCategoriesHandler, postCategoryHandler} = require("../handlers/categoriesHandler")

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesHandler);

categoriesRouter.post("/", postCategoryHandler);

categoriesRouter.put("/", updateCategoryHandler);

module.exports = categoriesRouter;