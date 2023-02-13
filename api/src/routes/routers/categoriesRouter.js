const {Router} = require('express');
const {getCategoriesHandler} = require("../middlewares/categoriesHandler")

const categoriesRouter = Router();

categoriesRouter.get("/", getCategoriesHandler);

module.exports = categoriesRouter;