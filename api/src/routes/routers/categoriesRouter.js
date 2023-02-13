const {Router} = require('express');
const {getCategoriesHandler, postCategoryHandler} = require("../middlewares/categoriesHandler")

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesHandler);

categoriesRouter.post("/", postCategoryHandler);

module.exports = categoriesRouter;